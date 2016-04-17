---
type: "journal-article"
authors: "Martin Spindler"
title: "Lasso for Instrumental Variable Selection: A Replication Study"
container: "J. Appl. Econ."
year: "2015"
issue: "2"
volume: "31"
pages: "450-454"
subject: "Economics and Econometrics, Social Sciences (miscellaneous)"
doi: "10.1002/jae.2432"
url: "http://dx.doi.org/10.1002/jae.2432"
citationkey: "Spindler2015"
updated: "20160303"
---

@key

####Notes
Use of LASSO to select instrumental variables, useful in cases where the number of instruments is large or even exceeds N. Uses `R`.

**LASSO** = Least absolute shrinkage and selection operator, introduced by Tibshirani1996. Basic idea is to minimize the residual sum of squares (RSS) while ensuring that the sum of the absolute value of the coefficients is less than a constant (i.e. $\sum{\abs{\alpha}} < C$).

It's equalivent to minimizing RSS with a penalty term for the absolute sum of coefficients.

The LASSO $\beta$ is:

$$\hat{\beta} \in \frac{arg min}{\beta \in \mathbb{R}^p}\sideset{}{_{i=1}^n}\sum{(y_i - x_i^\prime \beta)^2 + \frac{\lambda}{n}\|\beta\|_1 }$$

with $\|\beta\|_1 = \sideset{}{_{j=1}^p}\sum{|\beta_j|}$.

Choosing the penalty $\lambda$ is important. This can be done with cross-validation, but that can be difficult in high dimensional situations.

FengYu2013 propose "consistent cross-validation" (CCV) for selecting the optimal parameter.

The choice can be made using a score calculated as:

$$S = 2\frac{1}{n}\sideset{}{_{i=1}^n}\sum{x_i\epsilon_i}$$

where $\lambda$ is selected so that $\lambda \ge cn\|S\|_\infty$ with probability at least $1 - \alpha$, where $\alpha$ should be close to zero and $c > 1$ is a constant. Two options are then:

X-independent: $\lambda := 2c\sigma\sqrt{n}\phi^{-1}(1-\alpha/{2p})$

X-dependent: $\lambda := 2c\sigma\Lambda(1 - \alpha|X)$

Replication was successful, and shows that regressor selection by CV always selects too many regressors.