---
layout: mathpost
title: Multivariate Autogression State Space (CEREOS R Working Group)
---

I love cross-discipline groups. Today I attended a presentation by [Stephen Katz](http://cahnrs.wsu.edu/soe/people/facultynstaff/stephenkatz/) at the
[CEREOS R Working Group](https://cereo.wsu.edu/2017/04/17/package-intro-multivariate-time-series-mar-models/) on multivariate autoregression using the [MAR1](https://cran.r-project.org/web/packages/MAR1/index.html) and [MARSS](https://cran.r-project.org/web/packages/MARSS/index.html) packages.

The basic format is a state-space model of the form

$$
x_t = a + B x_{t-1} + Cc_t + w_t, \; w_t \sim MVN(0,Q)\\
y_t = x_t + \nu_t, \; \nu_t \sim MVN(0,R)
$$

where $\nu_t$ is measurement error, $y_t$ is the observed values of $x_t$, $x_t$ is the true population. We can then play witht the distribution of $\nu_t$, because for example if dealing with counts, many values might be zero, so a better distribution for $\nu_t$ might be negative binomial, poisson, or something else. Note that the observation equation could include other covariates too. Maybe my observations are less correct when it's cloudy for example.

In these models we arrive at a measure of the 'effect' of populations of each species on all other species in the system. A positive value means higher species density leads to higher density of the other species. In economics, these models are called vector auto-regression models (VAR), and have been around for rather a long time.

It's interesting how similar the ecosystem model is to how industries work in economies. Particularly to input-output accounts, except that in IO values can't be negative.

So I was thinking about the similarities, and then thinking about the concepts of resilience and reactivity of an ecosystem, and whether they could be applied to economies, and it turns out there's a whole literature on economic resilience, some of which approaches it from an ecological framework.

Basically, science is cool, and going to cross-discipline meetings sparks some great thinking.