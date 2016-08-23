---
layout: mathpost
type: course
title: "Systems of Linear Equations"
course: "Math Bootcamp"
---

### Intro

For a general linear system such as

$$\begin{align}
a_{11}x_1 + a_{12}x_2 + & \ldots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + & \ldots + a_{2n}x_n = b_2 \\
& \vdots \\
a_{m1}x_1 + a_{m2}x_2 + & \ldots + a_{mn}x_n = b_m \\
\end{align}$$

we are usually interested in three questions:

1. Does a solution exist?
2. How many solutions are there?
3. Is there an efficient algorithm to compute the solutions?

### Solving

There are essentially three methods for solving:

1. substitution (that joy of mind-numbing joys)
2. elemination of variables
3. matrix methods

#### Substitution
We've all done it, with it's error-prone obnoxious tendency to spiral your exam grade to 0.

#### Elimination of variables
There are three basic operations that can be done on a system of equations:

1. Switch the order of two equations
2. Add a multiple of another equation
3. Multiply by a scalar

The basic algorithm is as follows (using the below equation as an example):

$$\begin{align}
x_1 - 2x_2 = 8\\
3x_1 + x2 = 3\\
\end{align}$$

1) identify the variable to eliminate ($$x2$$).

2) multiply one of the equations by the negative coefficient of the variable in the other equation (-2):

$$2(3x_1 + x_2 = 3) \rightarrow 6x_1 2x_2 = 6$$.

3) add the result to the first equation:

$$\begin{align}
x_1 - 2x_2 = 8 \\
6x_1 + 2x_2 = 6\\
7x_1 = 14 \\
x_1 = 2 \\
\end{align}$$.

4) substitute the result back into an equation to solve for the other variable:

$$x_1 - 2x_2 = 8 \rightarrow 2 - 2x_2 = 8 \rightarrow x_2 = -3$$.

**Gaussian elimination** is essentially the above process. Starting with the equations following the first, you multiply an earlier equation by the negative fraction of coefficients for the term you want to eliminate (e.g. $$\frac{-a_{5k}}{a_{3k}}$$), and add that to the equation (e.g. equation $$5$$). Then you solve starting with the last equation, which should contain only one term.

**Guass-Jordan elimination** is similar, except that in the final system, each equation is divided by the coefficient of the first term.

#### Matrix Methods
The three operations on equations above are called **elementary row operations** in the context of matrices:

1. Interchange two matrix rows
2. change a row by adding it to a multiple of another row
3. multiply each element in a row by a scalar

The goal of the tranformations is to achieve a system of equations like those in Guassian elimination. Basically, convert the matrix to an **upper triangular matrix**, which has the form:

$$\left(\begin{array}{ccc|c}
a_{11} & a_{12} & a_{13} & b_1 \\
0 & a_{22} & a_{23} & b_2 \\
0 & 0 & a_{33} & b_3 \\
\end{array}\right)$$.

This is also referred to as **row echelon** form. The coefficients of the diagonal are referred to as **pivots**. In Gauss-Jordan elimination, we divide reach roach by its pivot so that the coefficients on the diagonal are $$1$$, and then use elementary row operations to arrive at the identity matrix. In the augmented form, the last column is the solution to the system.

If the matrix has a unit diagonal, it is said to be of **reduced row echelon** form. 

If you're used to linear algebra and missed this stuff, this is equivalent to:

$$Ax = b$$, 

where $$A$$ is the matrix of coefficients, $$x$$ is the matrix of variables, and $$b$$ is a vector of outcomes. Substitution, Gaussian elimination, and Guass-Jordan elimination are methods of solving that arrive at $$x = bA^{-1}$$,

The **rank** of a matrix is the number of nonzero rows in its row echelon form.

We also have the following facts (where $$A$$ is a matrix and $$\hat{A}$$ is the augmented matrix):

1. rank $$A \le$$ rank $$\hat{A}$$, rank $$A \le$$ number of rows of $$A$$, and rank $$A \le$$ number of columns of $$A$$.
2. the system has a solution iff rank $$\hat{A} =$$ rank $$A$$.
3. a linear system must have either $$0$$, $$1$$, or $$\infty$$ solutions.
4. if $$m = n$$, where $$m$$ is number of rows and $$n$$ is number of columns, the system has exactly $$1$$ solution.
5. accordingly, if a system has more unknowns than equations ($$n > m$$) it has either no solution or inifite solutions.
6. If $$b_j = 0 \forall j \in \{1,\ldots,n\}$$, then the system is **homogenous**.
7. A homogenous system has at least one solution, and if $$n > m$$, the system must have infinite solutions.
8. iff rank $$A = m$$, then there exists a solution for every choice of $$b$$.
9. if $$m > n$$, there is a RHS s.t. the system has no solutions.
10. iff rank $$A = n$$, there exists at most one solution for every choice of RHS.
11. iff $$n = m$$, there is one and only one solution for every choice of $$b$$. Such a matrix is called a **square matrix**.

