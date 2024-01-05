---
layout: single
title:  "(01/05) 마스터클래스 9주차"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h1>마스터클래스 9주차</h1>
(김성현 마스터님)

<h2>LLM과 Positional Encoding</h2>

- Intro<br><br>
: <br><b>등장 배경</b><br><br>
: : RNN이 아닐 경우 어떻게 순서 정보를 넣을지에 대한 고민 안에서 나오게 됨
: : 최신 LLM도 현재 동일한 방법론으로 사용되고 있으니, 잘 기억할 것!
<br><br>

- Positional vector를 만드는 방법론<br><br>
: <br><b>(1) Absolute positional encoding</b><br><br>
: : $a_i = i$
: <br><b>(2) Normalizing absolute positional encoding</b><br><br>
: : $a_i =  \dfrac{i}{n}$, $n = \text{sequence length}$
: <br><b>(3) Binary vector</b><br><br>
: : "{0:b}".format($n$)
: <br><b>(4) Continuousㅊ binary vector</b><br><br>
: : Sine 주기를 사용해 [-1, 1]사이의 연속적인 움직임
: <br><b>(5) Sinusoidal position embedding</b><br><br>
: : 각 step마다 하나의 유일한 encoding 값 출력
: <br><b>(6) Relative positional encoding</b><br><br>
: : 현재 등장한 토큰에서, 다음 토큰이나, 멀리 있는 토큰 등을 상대적인 거리로 보는 것
: : ex) T5 모델을 보면 구현 코드가 그대로 있다.
: <br><b>(7) Rotary embedding</b><br><br>
: : Relative positional encoding 방식 중 하나
: : RoPE (Rotary Positional Encoding)
: <br><b>Attention with linear biases (ALiBi)</b><br><br>

- Long-sequence Problems<br><br>
: : 현재 LLM은 긴 문서 내 모든 정보를 관찰하기 힘들다 (Lost in the Middle)
: : 생성이 길어지는 순간, 모델 최적화도 연구 (최근에 핫한 Attention cache, 디코딩 전략 연구 등)
: : RoPE 실습 colab (강의 자료에서 확인)