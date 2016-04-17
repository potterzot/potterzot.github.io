---
date: "February 23, 2016"
title: "Best Practices for Scientific Computing"
citation: WilsonETAL2014
bibliography: ../../library.bib
output: html_document
---

From paper:
####Box 1. Summary of Best Practices
1. Write programs for people, not computers.
  1. A program should not require its readers to hold more than a handful of facts in memory at once.
  2. Make names consistent, distinctive, and meaningful.
  3. Make code style and formatting consistent.
2. Let the computer do the work.
  1. Make the computer repeat tasks.
  2. Save recent commands in a file for re-use.
  3. Use a build tool to automate workflows.
3. Make incremental changes.
  1. Work in small steps with frequent feedback and course correction.
  2. Use a version control system.
  3. Put everything that has been created manually in version
control.
4. Don’t repeat yourself (or others).
  1. Every piece of data must have a single authoritative representation in the system.
  2. Modularize code rather than copying and pasting.
  3. Re-use code instead of rewriting it.
5. Plan for mistakes.
  1. Add assertions to programs to check their operation.
  2. Use an off-the-shelf unit testing library.
  3. Turn bugs into test cases.
  4. Use a symbolic debugger.
6. Optimize software only after it works correctly.
  1. Use a profiler to identify bottlenecks.
  2. Write code in the highest-level language possible.
7. Document design and purpose, not mechanics.
  1. Document interfaces and reasons, not implementations.
  2. Refactor code in preference to explaining how it works.
  3. Embed the documentation for a piece of software in that software.
8. Collaborate.
  1. Use pre-merge code reviews.
  2. Use pair programming when bringing someone new up to speed and when tackling particularly tricky problems.
  3. Use an issue tracking tool.
