---
layout: mathpost
type: course
title: "Examples of Utility Functions"
course: "micro_i"
---

### Cobb-Douglass
Given two goods $$x_1$$ and $$x_2$$, we have:

$$u(x_1, x_2) = Ax_1^\alpha x_2^\beta .$$

Taking the log of both sides:

$$
\ln u = \ln A + \alpha \ln x_1 + \beta \ln x_2
$$

### Perfect Substitutes

Perfect substitutes are a linear function:

$$u(x_1, x_2) = Ax_1 + Bx_2.$$

Marginal utility is constant, since $$\frac{\partial u}{\partial x_1} = A$$, and so $$MRS = \frac{A}{B}$$. So the consumer's preference between the two goods is indifferent to the amount of each good.

### Perfect Compliments

The consumer receives no marginal utility from an increase in just one good. So

$$
u(x_1, x_2) = A \min \{\alpha x_1, \beta x_2 \}.
$$

The indifference curve is right angled with a kink at $$\alpha x_1 = \beta x_2.$$



### CES

A generalized conception of utility, here

$$
u(x_1, x_2) = \left[\alpha x_1^{\frac{\sigma - 1}{\sigma}} + \beta x_2^{\frac{\sigma - 1}{\sigma}} \right]^{\frac{\sigma}{\sigma - 1}}.
$$

Where $$\sigma$$ represents the elasticity of substitution between the two goods. In particular

$$
\sigma = \frac{\partial (\frac{x_2}{x_1})}{\partial MRS_{1,2}} \cdot \frac{MRS_{1,2}}{\frac{x_2}{x_1}}.
$$

When $$\sigma = \infty$$, the goods are a perfect substitute (straight indifference curves), and when $$\sigma = 0$$, the goods are perfect compliments (right-angled indifference curves).

### Quasilinear

Utility is represented by a function and a linear component, so

$$u(x_1, x_2) = \alpha x_1 + v(x_2),$$

where $$v(x)$$ can be a concave or (more commonly) convex function. Often represent goods that are income-insensitive.

The marginal utility of the linear good is constant, and

$$MRS = \frac{\alpha}{\frac{\partial v}{\partial x_2}}.$$
