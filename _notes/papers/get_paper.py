#!/usr/bin/python

"""
USAGE: init_paper 
Creates a new paper note with full metadata and downloads the pdf:
* Uses the Crossref API to fetch paper metadata and abstract
* Automatically download the pdf and saves it in standard naming convention
"""

# -*- coding: utf-8 -*-

import os, sys
import string
import re
import requests
import json
from datetime import date
from collections import OrderedDict
from metapub import CrossRef as cr

#Depending on operating system
if sys.platform == "linux" or sys.platform == "linux2":
  HOME_DIR = "/www/potterzot.github.io"
elif sys.platform == "darwin":
  # OS X
  pass
elif sys.platform == "win32":
  # Windows...
  HOME_DIR = "C:/Users/Nicholas Potteri/potterzot.github.io"

###Universal
REPO_DIR = "_notes"
MD_DIR = "papers"
PDF_DIR = "Dropbox/personal-work/bibliography/library"


def clean_txt(txt):
  """Takes txt and returns a sanitized utf-8 string."""
  r = txt.encode("utf-8", errors="backslashreplace").decode('utf-8').replace("\\u0144", "")
  return r


def doi2json(doi):
  """
  Takes a DOI string and returns a JSON string of metadata.
  """
  if "arxiv" in doi:
    print("This script does not yet support arXiv.")
    sys.exit(2)
  else:
    url = "https://dx.doi.org/" + doi

    headers = {"accept": "application/json"}
    r = requests.get(url, headers = headers)

    if repr(r)=="<Response [200]>": #success!
      #handle potential encoding errors
      rtxt = clean_txt(r.text)
      try:
        j = json.loads(rtxt)
      except Exception as e:
        print(e)
        print(r)
        print(repr(rtxt))
        print("Error, DOI {} not found.".format(doi))
        sys.exit(2)
    elif repr(r)=="<Response [503]>":
      print("Error 503: DOI service currently unavailable, try again in a bit.")
      sys.exit(2)
    elif repr(r)=="<Response [404]>":
      print("Error 404: Resource {} not found".format(url))
      sys.exit(2)
    else:
      print("Error {}.".format(repr(r)))
      sys.exit(2)

  return j


def extract_metadata(res):
  """Creates an OrderedDict of metadata for writing."""
  d = OrderedDict()

  d['type'] = res['type']
  d['authors'] = ", ".join(make_author_list(res))
  d['title'] = res['title'].strip(" ")
  d['container'] = res['container-title']
  d['year'] = str(get_year(res))
  d['issue'] = res['issue'] if "issue" in res.keys() else ""
  d['volume'] = res['volume'] if "volume" in res.keys() else ""
  d['pages'] = res['page'] if "page" in res.keys() else ""
  d['subject'] = make_subject(res)
  d['doi'] = res['DOI']
  d['link'] = res['URL']
  d['citationkey'] = make_citation_key(res)
  d['updated'] = date.today().strftime("%Y%m%d")
  
  return d


def get_year(res):
  """
  Takes the DOI result and returns a string of the year.
  """
  return res['issued']['date-parts'][0][0]


def make_author_list(res):
  """Takes a list of author names and returns a cleaned list of author names."""
  try:
    r = [" ".join([x['given'], x['family']]) for x in res['author']]
  except KeyError as e:
    print("No 'author' key, using 'Unknown Author'. You should edit the markdown file to change the name and citationkey.")
    r = ["Unknown Authors"]
  return r 


def make_citation_key(res):
  """Takes a DOI query and returns a string citation key."""
  year = str(get_year(res))

  try:
    last_names = [x['family'] for x in res['author']]
  except KeyError as e:
    last_names = ["Unknown"]
  if len(last_names) > 3:
    key = last_names[0] + "ETAL" + year
  else:
    key = "".join(last_names) + year

  return key.replace(" ", "")

def make_subject(res):
  """Takes the DOI metadata and returns a subject name."""
  subj_dict = {
    "Agricultural and Biological Sciences (miscellaneous)": "Agriculture and Biological Sciences",
    "Am. J. Agr. Econ.": "American Journal of Agricultural Economics",
    "Annu. Rev. Resour. Econ.": "Annual Review of Resource Economics",
    "J. Appl. Econ.": "Journal of Applied Economics",
    "J Med Internet Res": "Journal of Medical Internet Research",
    "Pers Ubiquit Comput": "Perspectives on Ubiquitous Computation",
    "PLoS Comput Biol": "PLoS Computational Biology",
    "PLoS Med": "PLoS Medicine",
    "Unsorted": "Unsorted"}

  s = res['subject'] if "subject" in res.keys() else ["Unsorted"]
  
  return subj_dict[s] if s in subj_dict.keys() else s


def main(argv):
  """
  Takes a DOI and creates a markdown file with the article metadata, as well as attempting to download the pdf.
  """
  
  #Get the metadata from crossref.org
  doi = argv[0]
  res = doi2json(doi)

  #extract
  meta = extract_metadata(res)
  
  ##write metadata to file
  subject_dir = re.sub(r'\([^)]*\)', '', meta['subject'][0]).strip().lower().replace(" ", "_").replace(",","")
  md_dir = "/".join([HOME_DIR, REPO_DIR, MD_DIR, subject_dir])
  os.mkdir(md_dir) if os.path.isdir(md_dir) == False else None

  #First check that the file doesn't exist, and if it does, increment the citationkey
  filename = "/".join([md_dir, meta['citationkey'] + ".md"])
  tmp_citationkey = meta['citationkey']
  letters = list(string.ascii_lowercase)
  for j in range(0,26):
    if os.path.isfile(filename) == False:
      meta['citationkey'] = tmp_citationkey
      break
    tmp_citationkey = meta['citationkey'] + letters[j]
    filename = "/".join([md_dir, tmp_citationkey + ".md"])

  #Then write
  with open(filename, "w") as f:
    f.write("---\nlayout: mathpost\n")
    for k,v in meta.items():
      v = str(v) if type(v) is list else v
      try:
        f.write(k + ': "' + str(v) + '"\n')
      except UnicodeEncodeError as e:
        print("Unicode Error. Some character(s) may be wrong.")
        print(meta.keys())
        print(repr(k) + ": " + repr(v))
        print(e)

    f.write("---\n\n####Notes\n")

  #Add the metadata to the bibtex reference
  bibtex_filename = "/".join([HOME_DIR, REPO_DIR, MD_DIR, "library.bib"])
  with open(bibtex_filename, "a") as f:
    f.write("\n")
    s = ",".join([
      "@article{" + meta['citationkey'],
      "author = {" + meta['authors'] + "}",
      "doi = {" + meta['doi'] + "}",
      "issn = {" + meta['issn'] + "}",
      "journal = {" + meta['container'] + "}",
      "number {" + meta['issue'] + "}",
      "pages = {" + meta['pages'] + "}",
      "title = {" + meta['title'] + "}",
      "url = {" + meta['url'] + "}",
      "volume = {" + meta['volume'] + "}",
      "year = {" + meta['year'] + "}\n}"
      ])
    f.write(s)

  #add the reference to the "reading_list.md" file
  with open("/".join([HOME_DIR, REPO_DIR, MD_DIR, "reading_list.md"]), "a") as f:
    f.write("* **" + meta['citationkey'] + "**: (" + re.sub(r'\([^)]*\)', '', meta['subject'][0]).strip() + ") " + meta['link'] + "\n")

  print("reference {} added in {}!\n".format(meta['citationkey'], subject_dir))

if __name__ == '__main__':
  main(sys.argv[1:])
