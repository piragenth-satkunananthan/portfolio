---
title: Visualizing eigenvectors with linear interpolation
description: How a few lines of lerp turn a static 2×2 matrix into an animation that makes eigenvectors obvious.
pubDate: 2025-12-15
tags: [linear-algebra, java, visualization]
---

Eigenvectors are usually introduced as the solutions of **Av = λv**. That's correct, but it hides the picture: they're the directions that a matrix *doesn't rotate* — vectors that only get stretched or squashed along their own line.

I wanted to *see* that, so I built a small Java program: give it any 2×2 matrix and it animates the whole plane being transformed, then draws the eigenvector spans.

## What it does

1. Take a 2×2 matrix as input.
2. Compute its eigenvalues and eigenvectors.
3. Animate the grid moving from its original position to its transformed one, and draw the eigenvector spans.
4. Bonus: enter any vector and watch where the matrix sends it.

## The animation trick: lerp the matrix

A matrix transformation happens "all at once" — there's no in-between state. To animate it, I interpolate between the identity matrix *I* (nothing moves) and the target matrix *A*:

```text
M(t) = I + (A − I) · t,   t from 0 to 1
```

At `t = 0` the grid is untouched; at `t = 1` it's fully transformed. Every frame, each grid point `p` is drawn at `M(t) · p`.

Because every grid line is transformed by the same matrix each frame, straight lines stay straight and parallel lines stay parallel — you're watching a genuinely linear transformation unfold.

## Why eigenvectors pop out

While the grid twists and shears, most vectors visibly swing to new directions. The eigenvector spans don't: points on them just slide along the line, outward if λ > 1, inward if 0 < λ < 1, flipping through the origin if λ is negative. Once you've watched it a few times, the definition stops being an equation and becomes something you can see.

(One subtlety: because `M(t)` is itself a blend of I and A, the eigenvectors of A are also eigenvectors of every intermediate `M(t)`, so those lines hold still for the *whole* animation, not just at the end.)

The source is on [GitHub](https://github.com/piragenth-satkunananthan/Eigen-Vector-Visualization).
