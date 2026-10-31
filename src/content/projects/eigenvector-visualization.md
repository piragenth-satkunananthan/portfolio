---
title: Eigenvector Visualization
summary: Takes any 2×2 matrix, animates how it transforms 2D space in real time and draws the eigenvector spans that stay on their own line.
stack: [Java, Linear Algebra]
languages: ["Java"]
repo: https://github.com/piragenth-satkunananthan/Eigen-Vector-Visualization
featured: true
order: 4
highlights:
  - Computes eigenvalues and eigenvectors and animates the grid transformation
  - Smooth animation by interpolating from the identity to the target matrix
  - Transform any custom vector and watch where it lands
---

A small Java program that takes any 2×2 matrix and animates how it transforms 2D space in real time, drawing the eigenvector spans that stay on their own line.

## What it does

1. Takes a 2×2 matrix as input.
2. Computes its eigenvalues and eigenvectors.
3. Animates the grid moving from its original position to its transformed one.
4. Lets you enter any vector and watch where the matrix sends it.

## The animation trick

A matrix transformation happens "all at once", so to animate it the program interpolates between the identity matrix *I* and the target matrix *A*:

```text
M(t) = I + (A − I) · t,   t from 0 to 1
```

At `t = 0` the grid is untouched; at `t = 1` it's fully transformed. Every frame, each grid point `p` is drawn at `M(t) · p`. Because every grid line is transformed by the same matrix each frame, straight lines stay straight and parallel lines stay parallel — you're watching a genuinely linear transformation unfold.

While the grid twists and shears, most vectors visibly swing to new directions. The eigenvector spans don't: points on them just slide along the line. Once you've watched it a few times, the definition stops being an equation and becomes something you can see.
