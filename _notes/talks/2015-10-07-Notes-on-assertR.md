---
layout: post
title: Notes on assertR by Tony Fischetti
type: "talk"
speakers: ["Tony Fischetti"]
citationkey: Fischetti2015
---

I'm excited to use this package. For EDA you don't always know exactly what things should look like, but being able to constrain each of your variables so that you know at the start of your analysis whether there is something wrong with it has huge implications, the two foremost in my mind being:

1. Reducing embarrassing situations where you have to issue a correction, and
2. Reducing the likelyhood of process-killing errors after your analysis has been running for three hours.

Here are my (very brief) notes from the [ropensci](https://ropensci.org/) community call:

**[assertR](https://github.com/tonyfischetti/assertr): Data validation to avoid late-in-pipeline errors.**

[presentation slides](http://statethatiamin.onlythisrose.com/assertr-presentation.html)

[presentation video](https://vimeo.com/channels/rocommunitycalls)

**Other packages similar in scope:**

* [assertive](https://cran.r-project.org/web/packages/assertive/index.html): lots of `is_*` functions for R.
* [engarde](https://github.com/TomAugspurger/engarde): python defensive data analysis.

**Functionality/Verbs**

* `verify`: ensure a logical test is true, e.g. `mtcars %>% verify(mpg > 0)`. Failure looks like: `Error in verify(., mpg > 0): verification failed! (1 failure)`
* `assert`: test that each column in a data.frame satisfies condition, e.g. `mtcars %>% assert(within_bounds(10, 40), mpg)`. Useful predicates other than `within_bounds` include `in_set`, and `not_na`. Error tells you the number of violations.
* `insist`: dynamically create predicates, e.g. `mtcars %>% insist(within_n_sds(3), mpg)`. Other useful functions include `within_n_mads` (median absolute deviations). Error tells you all the violations rather than failing at the first.
* `insist_rows` apply assist over rows, e.g. `iris %>% insist_rows(maha_dist, within_n_mads(6), everything())`. `everything()` converts to a data matrix for the test. `maha_dist` is [mahalanobis distance](https://en.wikipedia.org/wiki/Mahalanobis_distance).
