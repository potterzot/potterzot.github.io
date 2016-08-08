---
layout: mathpost
type: course
title: "Functions and Calculus"
course: "Math Bootcamp"
---

#### Definitions
* $$f:x \rightarrow \mathbb{R}$$: `f(x) \rightarrow \mathbb{R}`, $$f$$ is a function that maps $$x$$ to $$\mathbb{R}$$.
* *domain*: the values of $$x$$ for which $$f(x)$$ is defined.
* *range*: values that $$f(x)$$ maps to.
* *injective*: one-to-one, each $$x$$ corresponds to exactly one value in the range of $$f(x)$$, for all $$x, y \in A, x \neq y \rightarrow f(x) \neq f(y)$$.
* *surjective*: onto, each value in the range can be arrived at by at least one value in the domain, for all $$b \in B, \exists a \in A$$ s.t. $$f(a) = b$$.
* *bijective*: $$f$$ is both injective and surjective.

#### Differentiation
* $$C^1$$: `C^1`, continuously differentiable once.

**Intermediate Value Theorem (IVT)**: If $$f(x) is $$C$$ and $$f(a) = r, f(b) = s$$, then $$f(x) \in [r, s]$$.
**Extreme Value Theorem (EVT)**: $$f(x)$$ has a min and max on any closed interval $$(a,b)$$.

**Mean Value Theorem (MVT)**: If $$f(x)$$ is $$C$$ on $$[a, b]$$ and differentiable on $$(a, b)$$, then $$f'(c) = \frac{f(b) -  f(a)}{b - a}$$ for at least one $$c, a < c < b$$.

A **Taylor Polynomial** is an approximation of the derivative of $$f$$, s.t. $$f'(x) = f(a) + \frac{f'(a)}{1!}(x - a) + \frac{f''(a)}{2!}(x - a)^2 + ... + \frac{f^{(n)}(a)}{n!}(x - a)^n$$.

#### Limits
The limit, $$\lim_{x \to \infty} a_n = L$$ is written `\lim_{x \to \infty} a_n = L`. $$L \in \mathbb{R}$$ is the limit of $$f$$ if as $$x$$ approaches $$a$$, where $$a \in \mathbb{R}, \exists \epsilon > 0$$ and $$\delta > 0$$ s.t. $$\forall x, 0 < |x - a| < \delta$$, then it follows that $$|f(x) - L| < \epsilon$$.

A typical proof follows the above definition directly.

We can also refer to the **epsilon neighborhood**, which is the set of $$x$$ s.t., if $$a \in \mathbb{R}$$ and $$\epsilon > 0$$, $$B_\epsilon (a) = \{x \in \mathbb{R}: |x - a| < \epsilon\} = (a - \epsilon, a + \epsilon)$$.

Alternatively, we can restate the def. of the limit as: $${a} \rightarrow L$$ if for all $$\epsilon > 0, \exists N \in \mathbb{N}$$ s.t. $$\forall n > N, a_n \in {B_\epsilon (L)$$.

A function is **continuous** if, given a function $$f:x \rightarrow \mathbb{R}$$, then $$\lim_{x \to a} f(x) = f(a)$$. Alternatively:

a) $$\forall \epsilon > 0, \exists \delta > 0, \forall x: |x - a| < \delta, [f(x) - f(a) < \epsilon]$$.

b) $$\forall \epsilon > 0, \exists \delta > 0, \forall x: B_\delta (a) \rightarrow f(x) \in B_\epsilon (f(a))$$.

#### Derivative Rules

* $$(uv)' = u'v + v'u$$: `(uv)' = u'v v'u`.
* $$\left(\frac{u}{v} \right)'$$: `\left(\frac{u}{v} \right)'`.
* $$(u(v))' = v'u'$$: `(u(v))' = v'u'`.
* $$(x^n)' = nx^{n-1}$$: `(x^n)' = nx^{n-1}`.
* $$f^{-1}$$: `f^{-1}`, the inverse function of $$f(x)$$.
* If $$f^{-1} = g(z)$$, then $$g'(z) = \frac{1}{f'(g(z))$$.

#### Logs and Exponents
This should probably go somewhere else but...

* $$e = \lim_{n \to \infty} (1 + \frac{1}{n})^n = 2.7183...$$.
* $$a^r \cdot a^s = a^{r+s}$$.
* $$a^{-r} = \frac{1}{a^r}$$.
* $$\frac{a^r}{a^s} = a^{r-s}$$.
* $$(a^r)^s = a^{rs}$$.
* $$a^0 = 1$$.
* $$(e^x)' = e^x$$.
* $$(e^{u(x)})' = e^{u(x)} \cdot u'(x)$$.
* $$\log(r \cdot s) = \log r + \log s$$.
* $$\log(\frac{r}{s}) = \log r - \log s$$.
* $$\log(\frac{1}{s}) = -\log s$$.
* $$\log(r^s) = s\log r$$.
* $$\log 1 = 0$$.
* $$\ln(x)' = \frac{1}{x}$$.
* $$\ln(u(x))' = \frac{1}{u(x)} \cdot u'(x)$$.




