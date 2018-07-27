---
layout: post
title: A Method for Taking Notes
---

It has taken me a while to come up with a method of reading and keeping notes that feels efficient and doesn't lead to a huge buildup of clutter. In homage to the [Rifleman's Creed](https://en.wikipedia.org/wiki/Rifleman%27s_Creed): This is my note-taking system. There are many like it but this one is mine. 

The basic workflow is as follows:

1. Take notes in a *physical notebook*, starting each day on a new page with the date. If taking notes about an article, reference it with same citation key as is used in your reference library. If taking notes on a class, reference the same class tag as you use in your digital note system.
2. At the start of each day, add the notes from the previous day to your digital note system. Tag notes with both the relevant topics and the citation key, or if a class the class name and the professor (and any other tags you want). At this point I also take 5-10 minutes to write in my work journal about what accomplished yesterday and what I hope to get done today.

For many people it is easier to take notes on their computer, and for courses I think that makes sense most of the time, but there are also times when I'm out and I want to write down a thought about a class or a paper, and for this the daily log of notes is perfect. 

I follow Stephen Intille's (previous) suggestion on the citation key: the citation key (and pdf name) is CamelCase with the authors' last names and the year. So [Angrist and Krueger 1990](https://www.nber.org/papers/w3572) is "AngristKrueger1990", and the pdf is named the same. For papers with more than 3 authors, I use the first author and "ETAL", so that [Sanbonmatsu et al 2012](https://www.jstor.org/stable/41581100) becomes "SanbonmatsuETAL2012". For more excellent thoughts about your phd and a host of good links, Intille has [many more ideas](https://www.ccs.neu.edu/home/intille/teaching/advising/tips.htm)).

####Reference and PDF Management
As for actual reference library and pdf management, I use [Mendeley](https://www.mendeley.com/) to manage references, and set it to watch a library folder of pdf files that is on dropbox. I also set it to sync to a bibtex library file. I separate articles that I want to read from those that are in my library, so that the directory structure looks like this:

    Dropbox ->
        bibliography ->
            library: all pdfs in mendeley
            unread: pdfs of articles I want to read (not in mendeley)
            library.bib: bibtex library file

The advantage of this setup is that I can update and sync mendeley across multiple computers, and sync/share pdf files via dropbox. (I turn off the pdf uploading to mendeley because you aren't given much space in their free plan.) The bibtex file is useful because I can cite references when writing a document in Rmarkdown (or other flavor) or Latex. If I am forced to write in Word, I can use the mendeley plugin to cite references there.

I can also read papers on my tablet, which keeps local copies of everything in the "unread" folder on dropbox. I don't need a pdf writer because I find it better for both retention and understanding to just write the notes about the article in my notebook, or if I'm at my computer, add the notes directly to my digital note system.

Once a paper is read, I move it from the "unread" to the "library", double check the reference that mendeley generates, and I'm done.

####Digital Notes
There is a lot of flexibility here. I use vim, sublimetext, and Rstudio to write code, so I prefer a flat-file system that I can edit from within either of those three programs. To date my solution is just a [github repository](https://github.com/potterzot/napnotes) that contains mostly markdown text files. I can edit it from anywhere including the web, the markdown files are automatically rendered to html by github, and I use grep and other [bash](https://swcarpentry.github.io/shell-novice/) commands to search by tag, etc... (`grep -R -n -w "@thistag ./*` will provide a line-numbered list of all files that contain that string.) 

This is pretty low-level, but in a note taking system I really only need a text editor with four extra features:

1. cloud/web sync, access, version control
2. providing links to files (media, web pages, documents, etc...)
3. tagging
4. works anywhere

Evernote comes close to achieving this, but with more overhead, less clear version control and poor clients on Linux.
