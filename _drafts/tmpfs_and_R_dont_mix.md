---
layout: post
title: `tmpfs` and R Don't Mix
---

I do a lot of analysis on my trusty laptop with and SSD and 4GB of ram. It generally handles things beautifully, so I've been concerned that it's time had come in the last few weeks. I've been working on the [rain prediction] kaggle contest for fun, and since the training file is >1GB, I read it into R as an `ffdf` object, which is a package for working with data stored on the hard drive, rather than kept in memory.

Funny thing is, in linux these days the `/tmp` directory is a tmpfs, which means it's stored in RAM.

Interestingly enough, R also stores data in a folder in `/tmp`.

Guess where `ff` writes it's "on disk" files to by default?

You can sense the impending doom... Yes, I was reading the training file into an ffdf object in R, thinking it was stored on my hard drive, but it was being saved to /tmp, so in fact it was still in RAM, and as I whimsically created second and third and fourth derivations from the original ffdf object, the number of files in /tmp grew and grew, until my computer would suddenly turn itself off. (Actually, I never got to a fourth derivation because of this.)

Several hours later, I've managed to change my /tmp directory to an actual on-disk directory in it's own partition. I wanted to record the process here, and also talk about a few other helpful options.

The first is that `ff` provides a way of setting the directory it uses for tmp files. So for a while I was doing (in R):

```
fftmpdir <- options("fftempdir")
options(fftempdir = "data/")
```

This works well, because then the files get saved in `data/` instead of `/tmp`. This simple thing may be enough to fix the problem.

Only, my computer was also crashing when I tried training my model with data more than 1GB, for similar reasons. R is capable (with some work) of chunking and other methods of not keeping everything in memory at once, but training models, especially classification models with many classes, takes some serious memory. So still, crashes.

The new setup allows for copious use of `/tmp`'s spacious 10GB, as well as an extra 5GB swapfile to resort to if my RAM runs out. Here's what I did:

###Step 1: Download and create a gparted live usb
[tuxboot] handles this great. Easy to do. I tried first doing it the old way, where you download the .iso by hand, and copy it to your usb drive with `dd`, but that turned into a mess. tuxboot was much nicer.

###Step 2: Shrink down the partitions to create space for a /tmp partition
Lots of tutorials on this. It's not terribly hard. Still worth making a backup of your files before you go about changing things.

###Step 3: Disable systemd tmpfs on /tmp
There are a number of suggestions on how to do this. One is to just issue `systemctl mask tmp.mount` at the terminal. This works well **if** you don't have a separate partition for `/tmp`. If you do, it will prevent systemd from doing anything with `/tmp`, including mounting it as a normal disk partition. 

Instead, I found it better just to add `/tmp` to `/etc/fstab`. You can get the UUID for your `/tmp` partition with `sudo blkid`.

###Step 4: Create a swapfile
I made `/tmp` 15GB, and I used five of that for a swapfile. 

```
fallocate 5GB /tmp/swapfile
mkswap /tmp/swapfile
swapon /tmp/swapfile

#Edit /etc/fstab to include:
/tmp/swapfile  none  swap  defaults  0 0
```

Should get the swap file up and going. I also wanted to decrease the tendency to use it, so I changed the swappiness from 50 to 20:

```
#/etc/sysctl.d/99-sysctl.config
vm.swappiness=20
```

After a reboot I was left with a /tmp partition that had 10GB of free space, a 5GB swapfile for use if I run out of RAM, and the knowledge that I shouldn't be crashing things anymore (for now). Of course, I haven't tried running anything yet, so maybe I'll be reporting back tomorrow that I have mingled my tears with the electrons from my screen and given up on technology all together. Can you still do machine learning without the machines?