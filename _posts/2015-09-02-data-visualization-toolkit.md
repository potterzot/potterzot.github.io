---
layout: post
title: Github and Jekyll as a Data Visualization Toolkit
---

I've maintained some version of [potterzot.com](http://potterzot.com) for several years now, but being more of a statistical programmer than web designer, it often looks like something kind of thrown together. In the past few months that I've finally gotten around to implementing something that I've been wanting to do for a while: an easy to update site to display data visualization and analysis.

The site works like this:

* Domain name purchased from your favorite domain name seller.
* Hosted on github pages, in a repository named `<username>.github.io`.
* Developed using [Jekyll](http://www.jekyllrb.com).
* Visualizations that use D3JS are posted to as gists, and show up on [bl.ocks.org](http://bl.ocks.org).
* Analysis and visualizations in `R` are written up in Rmarkdown and rendered to html using `knitr` and posted as a project page.
* Analysis and visualizations in `python` are written up in ipython (now [jupyter](http://jupyter.org)), rendered to static html, and posted as a project page.
* Blog posts are posted in the normal Jekyll way.

This makes it easy to export a new demo or project summary from either R or python to a good-looking web page and have it maintain a consistent look and feel.

In the steps below I skip a lot of the actual code, which for each step can be found fairly easily with google. My hope here is to provide a general overview of the larger picture, which can be hard for someone to piece together from the start. Good luck!

### Step 1: Initial Setup
__Domain Name__

You don't need a domain name to start building your site, and if you want to host it at `<username>.github.io` then you don't need one at all. However, if you want a name like potterzot.com, you'll need a domain name. I bought mine from [bluehost](http://www.bluehost.com), simply because that's where I hosted my site back when it was a python static site, and before that when it was a wordpress blog, and before that something nebulous and lost to time.

__Github Account__

You need a github account, and in order to host a site on github you need to create a new repository named `<username>.github.io` (so my site repository is potterzot.github.io).

__Software__

Install [Ruby](http://www.ruby-lang.org), and then install [jekyll](http://www.jekyllrb.com).

### Step 2: Create the Initial Site
Create the site with `jekyll new ./` or, if you want to closely follow the structure of this site, you can fork and clone potterzot.github.io and put the contents in the directory of your cloned github repository.

If you have a domain name, follow github's directions to route that domain name to your github page. Most likely this involves creating a file named CNAME in your repository with the domain name in it, and creating A links on your domain provider to reroute to github DNS servers.

### Step 3: Configure the Site and Push to Github
Most of the jekyll configuration happens in `_config.yml`, including the site name, author, description, etc... If you cloned the source for this site, you'll (probably) want to remove the content and replace it with your own.

You can see the site by running `jekyll serve` and pointing your web browser to: 127.0.0.1:4000. Once you like the look of it, push it to github, and you're done!

### Step 4: 'Mirin
When you're done 'mirin, a few notes:

__Using bl.ocks.org__

bl.ocks.org is just a viewer for code stored with your username at gist.github.com. There are ton of examples at Mike Bostock's [page](http://bl.ocks.org/bostock) on how to do this, but the basic idea is to upload an index.html file. You can add data, css, and javascript, either as separate files or all contained within index.html. You can also add an image titled thumbnail.png that will be shown at `bl.ocks.org/<username>`. 
