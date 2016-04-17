#### Instrumental Variables and the Search for Identification: From Supply and Demand to Natural Experiments. 
@AngristKrueger2001
@IV

IV solves 2 problems: OVB and noisy data.


@Wright1928 use IV to estimate elasticities of supply and demand for flax seed. Instruments can be variables that (A) affect demand without affecting cost or (B) affect supply without affecting demand (e.g. price of substitute goods and yield per acre). This method is not efficient as TSLS is.

@TSLS assumes homoskedastic errors. @Woolridge2001 explores GMM version of TSLS.

@Friedman1957 marginal propensity to consume predicted by income, but income is noisy, so city dummies as instruments (results of stage 1 are avg income by city). Equivalent to weighted regression of city avg, where weights are num of obs per city.

@IV are consistent, but not unbiased, so still go to population value with large N, but not so for small N. (sample sizes should be large).

**example** @AngristKrueger1991 To take the schooling as a predictor of income example, since both are affected by age, we can use quarter of birth as an instrumental variable (kids born in early quarter in states with a december 31 cutoff are effectively a year older than kids born in the late quarter of the previous year). Men born in Q1 have about 0.1 less schooling than those born in later quarters, and earn about 0.1% less. The ratio of difference in earnings to difference in schooling (0.001 / 0.1 = 0.1) is the estimate of the instrumental variable.

This effect is small, but it seems like the effect could be larger in low-income families than high-income families, which are presumably able to overcome the difference in age over time with additional support.

@AngristLavy1999 find that class size has a negative effect on student test scores. Isn't this contrary to much of the literature on class size?

@RosenzweigWolpin2000 offer a criticism of IV because they may not be grounded in causal theory. But IV is heavily theory based, even if the causal mechanisms for a specific natural experiment are not.

**Importantly**, IV provide an estimate only for the specific group that is manipulated by the instrument. We cannot necessarily generalize to other groups for whom the instrument would not have an effect. In essence, the effect is a Local Average Treatment Effect (@LATE), or the effect of subjects who take the treatment if assigned to the treatment group, but not otherwise. In some cases, the experiences for the "compliers" captured by LATE are representative of the entire treated group, if everyone in the population has the same response to a particular intervention or treatment. If treatment effects are heterogeneous then the effects may differ (See @ImbensAngrist1994). 

#####Potential Pitfalls
* if the instrument is correlated with the omitted variables (ex. weather probably shifts supply curve of coffee, but could also shift demand curve if futures traders use weather to predict supply)

*  

