---
layout: mathpost
type: course
title: "Measurement" 
course: "Macroeconomics I"
---

?? Has anyone ever looked at the noise levels in macro variables to figure out how much (roughly) noise an aggregate variable like GDP might contain? It strikes me that if $$C$$, $$I$$, and $$G$$ have roughly 5% measurement error, you could be looking at huge variation in GDP that is all just noise, so any model with GDP as a dependent variable would be... rough to say the least. How do we get causal inference from that?

In macro we care about two things:

1. Long term trends
2. Short term fluctuations (business cycle)

### GDP

**GDP** is the final output of the economy, calculated in 3 different ways: Value Added (VA), Expenditures, and Income.

#### GDP by Value Add

Value added is total revenues less expenditure on intermediate goods, so it includes labor and capital expenditures:

$$Y = f(K,L)$$, where $$K$$ is capital and $$L$$ is labor. 

#### GDP by Expenditure

$$Y = C + I + G + (EX - IM)$$, where $$C$$ is consumption expenditures, $$I$$ is investment, and $$G$$ is government expenditures ($$EX$$ and $$IM$$ are exports and imports).

#### GDP by Income

$$Y = COE + GOS + GMI + NX$$, where $$COE$$ is compensation, $$GOS$$ is profits, and $$GMI$$ is income to non-incorpated entities, which includes rents, proprietor income, etc.... $$NX$$ is net of taxes less subsidies on production and imports.

### Price Indices

To deal with changing prices, we can pick a basket of goods and compare prices over years, with inflation being the percent change in prices from one year to the next:

$$Inf = \fract{p_t - p_{t-1}}{p_{t-1}}$$, where $$p$$ is a price index.

Generally we use a **chained** price index, where the change from $$t$$ to $$t+1$$ is part of a geometric mean rather than a simple mean (Also called a **Fisher-Index**.

Ex: CPI.

### Other Measures

* **Flow** and **Stock**: Flow is a measure of something over time (e.g. income), stock is a measure of the level of something (e.g. wealth). We can talk about capital stock as $$K+{t+1
 = (1 - \delta)K_t + I_t$$, i.e. the previous capital stock less depreciation plus investment.
* **Working population**: All eligible in the population (e.g. aged between 16 and 65).
* **Labor force**: Those looking/willing to work.
* **Unemployed**: Not working but would work if they could find a job. Must be actively searching.

### Detrending

Because time-series is composed of trend and cycle, s.t. $$x_t = x^t_t + x^c_t$$, we want to decompose and remove the trend if we are studying the cycle. Two methods of doing so are:

1. OLS
2. Hodrick-Prescott Filter:

For $$\lambda > 0$$, we want to minimze $$(x_t - x^t_t)^2 + \lambda[(x^t_{t+1} - x^t_t) - (x^t_t - x^t_{t-1}]
^2$$.

The first term penalizes large cyclical components, while the second penalizes large variation in growth rate.

Variables can be:

* **procyclical**: follow the business cycle (e.g. consumption)
* **countercyclical**: inverse/anti of the cycle (e.g. unemployment)
* **acyclical**: not correlated with the cycle
* **leading**: Changes predict/lead the cycle change
* **lagging**: Changes lag behind those of the cycle

