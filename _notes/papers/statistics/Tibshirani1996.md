---
type: "journal-article"
authors: "Robert Tibshirani"
title: "Regression Shrinkage and Selection via the Lasso"
container: "Journal of the Royal Statistical Society. Series B (Methodological)"
year: "1996"
issue: "1"
volume: "58"
pages: "267-288"
subject: "Statistics"
doi: ""
url: "http://www.jstor.org/stable/2346178"
citationkey: "Tibshirani1996"
updated: "20160303"
---

####Notes
Least absolute shrinkage and selection optimizer (LASSO) minimizes the residual sum of squares subject to the constraint that the sum of the absolute value of the coefficients is less than some constant.

Two typical issues with OLS are:

1. **prediction accuracy**: OLS has large variance but minimal bias, which is not necessarily optimal.
2. **interpretation**: OLS can be difficult to interpret because we want to figure out which ones are *really* important.

Two typical solutions are `subset selection`, where specific regressors are selected, and `ridge regression`. The problem with subsetting is that it can really vary based on small changes to the data, while ridge regression does not set any coefficients to zero, so it's not easily interpretable.











