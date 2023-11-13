---
layout: single
title: "(Math) 확률분포"
categories: boostcamp-material
sidebar:
  nav: "docs"
---

- 확률분포의 종류<br><br>
: <br><b>1) 정규분포(normal distribution)</b><br><br>
: : <a href="https://ko.wikipedia.org/wiki/%EC%A0%95%EA%B7%9C_%EB%B6%84%ED%8F%AC">정규분포</a>
: : numpy.random.uniform(0,1,10) 형태로 사용
: <br><b>2) 연속균등분포(uniform distribution)</b><br><br>
: : <a href="https://ko.wikipedia.org/wiki/%EC%97%B0%EC%86%8D%EA%B7%A0%EB%93%B1%EB%B6%84%ED%8F%AC">연속균등분포</a>
: : np.random.normal(0,1,10) 형태로 사용
: <br><b>3) 지수 분포(exponential distribution)</b><br><br>
: : <a href="https://ko.wikipedia.org/wiki/%EC%A7%80%EC%88%98_%EB%B6%84%ED%8F%AC">지수 분포</a>
: : np.random.exponential(scale=2, size=100) 형태로 사용