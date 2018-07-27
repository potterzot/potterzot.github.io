---
layout: page
title: Python Gotcha's
---

A running list of gotcha's in python:

###Pandas (See also [Caveats and Gotchas](https://pandas.pydata.org/pandas-docs/stable/gotchas.html))
* `in` tests for membership in the index, not the values. To test for values, use `isin()
* Select for values in multiple columns using '&': df[(df['a']>1) & (df['b']<2)]
* 
