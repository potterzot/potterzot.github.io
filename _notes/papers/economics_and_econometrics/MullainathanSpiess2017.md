---
layout: mathpost
type: "journal-article"
authors: ['Sendhil Mullainathan', 'Jann Spiess']
citation-authors: "Mullainathan, Sendhil, and Jann Spiess."
citation: "None"
source-title: "Machine Learning: An Applied Econometric Approach"
title: "Notes on 'Machine Learning: An Applied Econometric Approach', by Sendhil Mullainathan, and Jann Spiess"
container: "Journal of Economic Perspectives"
publisher: "American Economic Association"
issn: ""
year: "2017"
issue: "2"
volume: "31"
pages: "87-106"
subjects: ['Economics and Econometrics']
doi: "10.1257/jep.31.2.87"
link: "https://dx.doi.org/10.1257/jep.31.2.87"
citationkey: "MullainathanSpiess2017"
fetched: "20170620"
---

**Citation:** Mullainathan, Sendhil, and Jann Spiess. "Machine Learning: An Applied Econometric Approach". *Journal of Economic Perspectives* 31, no. 2 (2017): 87-106. [[Paper link](https://dx.doi.org/10.1257/jep.31.2.87)]

#### Questions / References to check

* Belloni, Chernozhukov, Hansen 2011
* Athey and Imbens 2016
* Imai and Strauss 2011
*

#### Summary
Mullainathan and Spiess discuss the potential uses of ML in econometrics at a conceptual level. Algorithms search for a function $$F$$ that minimizes some measure of fitness, subject to a complexity penalty $$R(f)$$.

* ML algorithms are good at prediction. They focus on estimating $$\hat{y}$$, not $$\hat{\beta}$$.
* Difficult to extrapolate causal action, especially with many correlated traits. E.g. $$\hat{\beta}$$ cannot be interpreted in the same way as it would with traditional econometric approaches.
* Choosing different traits can have a big impact under regularization.
* Prediction can be part of econometrics not just because of new data, but also because some tools can be reinterpreted as a prediction problem. For example, the first stage of TSLS is an effort to predict $$\hat{x}$$. Given the large researcher degrees of freedom in choosing instruments, here ML can help by let the data provide stronger instruments than we might be aware of otherwise. (aside: This seems similar to PCA).
* Similarly, we don't care about the coefficients of controls, and ML can be used to estimate propensity scores (Lee, Lessler, Stuart 2010) or to reduce the dimensionality of controls (Chernozhukov et al 2016).
* Other possible uses include: it pretreatment covariates allow predicting treatment at better than chance, this is a sign of imbalance beetween control and treatment groups. Estimating heterogeneous treatment effects can be seen as a prediction problem. See Athey and Imbens (2016) and Imai and Strauss (2011)
* Another class of applications is policy problems, in which often we want to develop policies based around a prediction. *What traits* should a new hire have? *Which impoverished* people should be targeted to have the biggest impact in poverty reduction?
* Lastly, ML can serve as a benchmark against which theories can be tested, i.e. the MSE of the causal explanation tested against the best possible predictor using ML.
