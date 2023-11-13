---
layout: single
title: "(Math) 경사하강법 수식"
categories: boostcamp-material
sidebar:
  nav: "docs"
---

- 1) 경사하강법 목적식<br><br>
: ∇β ⎸⎸**y** - **X**β⎸⎸<sub>2</sub> =  - **X**<sup>T</sup> · (**y** - **X**β) &emsp;/&emsp; n · ⎸⎸**y** - **X**β⎸⎸<sub>2</sub><br><br>
: : 선형회귀의 목적식을 최소화하는 나블라 베타(베타로 이루어진 벡터)는, - (**X**의 전치행렬) 에 **y** - **X**β (error) 를 곱한 값이라는 뜻<br><br>
- 2) 위 목적식을 최소화하는 경사하강법 알고리즘<br><br>
: : β<sup>(t+1)</sup> = β<sup>(t)</sup> - λ∇β ⎸⎸**y** - **X**β<sup>(t)</sup>⎸⎸<br><br>
: : 만약 L2-norm이 아니라 L2-norm의 제곱을 사용하면 경사하강법 알고리즘은 다음과 같이 간단해진다.<br><br>
: : β<sup>(t+1)</sup> = β<sup>(t)</sup> + 2λ / n · **X**<sup>T</sup>(**y** - **X**β<sup>(t)</sup>)