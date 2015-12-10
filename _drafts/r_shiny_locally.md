---
layout: post
title: Instal R Shiny in Your Home Directory
---

Sometimes you 

First, install R Shiny following Rstudio's [directions on building from source](). However, when you get to this line:

    cmake -DCMAKE_INSTALL_PREFIX=/usr/local -DPYTHON="$PYTHON" ../

change `/usr/local` to `/home/your_username/local/shiny-server`.





Finish installing R Shiny as in Rstudio's directions. Then do the following:

    cd /home/your_username/shiny-server
    
    #
    mkdir -p prefix/bin
    echo "export PATH=/home/your_username/shiny-server/prefix/bin:$PATH" > prefix/bin/activate




Add a subdirectory to 