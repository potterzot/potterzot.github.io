---
layout: mathpost
type: course
title: "Convexity of Preferences"
course: "micro_i"
---

**Convexity** implies that a linear combination of two bundles will be weakly preferred to just one bundle. Essentially it's a preference for balance rather than extremes. In notation:

$$x \succeq y \Rightarrow ax + (1-a)y \succeq y$$

Equivalently, for all bundles $$x,y,z \in X$$:

$$
\begin{array}{lr}
y \succeq x \\
z \succeq x
\end{array} \Rightarrow \lambda y + (1-\lambda)z \succeq x
$$

i.e., the convex combination of $$y$$ and $$z$$ lie in the upper contour set (UCS) of $$x$$.

**Strict Convexity** is just the same, but with $$\lambda y + (1-\lambda)z \succ x$$.

You can only have non-strict convexity if the indifference curve is linear, or if it is represented by a utility function such as $$u(x_1, x_2) = \min\{ax_1, bx_2\}$$.

Convexity also implies a diminishing **marginal rate of substitution** (MRS).

$$MRS_{1,2} \equiv \frac{\frac{\partial u}{\partial x_1}}{\frac{\partial u}{\partial x_2}}$$

Given $$u(x_1, x_2, \ldots, x_n)$$, the total derivative is

$$du = \frac{\partial u}{\partial x_1} dx_1 + \frac{\partial u}{\partial x_2} dx_2 + \ldots + \frac{\partial u}{\partial x_n} dx_n$$

But at the indifference curve $$du = 0$$, so for any two bundles $$i$$ and $$j$$,

$$0 = \frac{\partial u}{\partial x_i} dx_i + \frac{\partial u}{\partial x_j} dx_j$$.

Solving for $$\frac{dx_j}{dx_i}$$, we obtain

$$
-\frac{dx_j}{dx_i} = \frac{\frac{\partial u}{\partial x_i}}{\frac{\partial u}{\partial x_j}} = MRS_{i,j}
$$.

A utility function is **Quasiconcave** if, $$\forall y \in X$$, $$UCS(x) = \{y \in X \vert u(y) \succeq u(x)\}$$. Convexity equals convex UCS equals quasiconcave utility function.

Alternatively, quasiconcavity implies $$u(ax + (1-a)y) \ge \min\{u(x), u(y)\}$$. If the inequality is just greater than, then the utility function is **strictly quasiconcave**.

Generally we require only that a utility function satisfy quasiconcavity, but it can be either convex or concave.

### Homogeneity
**Homogeneity of degree k**: increasing $$x_i$$ by $$a$$ implies an increase in utility of $$a^k$$. For example, a utility function is homogenous of degree 3. Then $$u(x+3) - u(x) = a^3$$.

#### Properties
* $$u'(x)$$ is homogenous of degree $$k-1$$ if $$u(x)$$ is homogenous of degree $$k$$.
* indifference curves between homogenous functions are radially expansive, and the MRS is constant at all points of a ray from the origin.

### Homotheticity
A utility function is **Homothetic** if it is a monotinic transformation of a homogenous function.

#### Properties
* if $$u(y) = u(z)$$, then $$u(ay) = u(az)$$.
* the MRS is homogenous of degree 0 (i.e. an increase in x of a returns the same utility).
