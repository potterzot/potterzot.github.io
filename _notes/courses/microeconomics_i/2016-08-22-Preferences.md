---
layout: mathpost
type: course
title: "Preference Relations" 
course: "Microeconomics I"
---

#### Basic Preferneces
We can think about decision-making in two ways:

1. Preference-based: for each pair of options, which does someone say they prefer.
2. Choice-based: observed actual choice.

Preferences are the traditional method, and assumptions can be made about rationality. However, choice-based offers a more general approach that does not necessarily require any assumptions about preferences, and is based on actual observed choices. If one *assumes* the **weak axiom of revealed preferences**, then in a sense assumptions can be made about choice-behavior that parallel the rationality assumption of preferences.

*Note*: we use $$\succ$$ and $$\prec to indicate strict preference, so that if $$a$$ is preferred to $$b$$, we write $$a \succ b$$. If $$a$$ is preferred or indifferent to $$b$$ (a **weak preference**), we write $$\succeq$$, and $$\preceq$$ for vice-versa.

**Rational Behavior** indicates two things: (1) preferences are **transitive**, and they are **complete**.

Here **transitive** is meant in the mathematical sense that if $$a \succ b$$ and $$b \succ c$$, then $$a \succ c$$. Similarly, **completeness** means that for all elements in the set of choices, each pair is comparable, i.e. $$\forall (a,b) \in X$$, where $$X$$ is the set of all options, either $$a \succeq b$$ or $$b \succeq a$$ or both.

We also assume **reflexivity**, that $$x \succeq x$$.

**Example**: For a rational consumer given two choice bundles $$X = \{x: x \in \mathbb{R}\}$$ and $$Y = \{y: y \in \mathbb{R}\}, $$X \succeq Y$$ iff $$\sum x_i \succeq \sum{y_i}$$. That is, the sum of the value of $$x_i$ is greater than the sum of the value of $$y_i$$. Here "value" can mean utility.

#### Violations of Transitivity
Note that if $$A \succeq B \succeq C \succeq A$$, theoretically this person would be willing to spend in a cycle because they always prefer an option they don't have. There are four general sources of this behavior:

1. Alternatives are not distinguishable. If $$x \succ y$$ if $$x \succeq y - 1$$, but $$x \sim y$$ if $$\vert x - y \vert < 1$$.
2. Framing effects. 
3. Aggregation of criteria. Given multiple options with different traits, the aggregation of these traits can create cyclical preferences when compared pairwise. Analogous to group decision making, where one option is always preferred among two people, but no single option is preferred by the group as a whole.
4. Change in preferences - not really a violation, but still causes referesal or change in preference order.

