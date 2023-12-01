---
layout: single
title:  "(12/01) 오피스아워 4"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>오피스아워 4 조호준 조교님</h2>

1. 기본 과제 1<br><br>
: : tqdm - 진행도 보여주는 패키지
: : KoNLPy - 한국어 형태소 분석 라이브러리 ~ 쓸 일이 많다.
: : 토큰화
: : 영어는 토큰화가 쉬움. 기본적으로 단어 단위로 하면 됨
<br><br>
: : re.split 함수
: : chain 함수 (변수 안에 포함된 리스트들을 한 줄로 이어주는 함수, 안에 * 찍어준 이유는 언패킹 때문이다(?))
: : Counter 함수

2. 기본 과제 2<br><br>
: : Q1. train, dev, test 데이터를 모두 dictionary에 포함되어 있는데, 이때 발생할 수 있는 문제점?
: : Cheating 처럼 작동하게 된다. 제대로 만들때는 train dataset만 활용해야 더 공정하게 평가할 수 있다.
: : nn.Embedding()은 무슨 역할을 하는지?
: : 모델에 인코딩된 숫자값을 그대로 밀어넣게 된다면, 예를 들어,
: : I love this movie -> [37, 2, 5, 6] 이라면
: : 단어간의 숫자 대소 비교가 생기게 된다.
: : 가장 쉬운 방법은 one-hot encoding을 넣는 것 ([1,0,0,0], [0,1,0,0] 같이)
: : (사이에 뭔가 설명 더 있었는데 이해 못함)
: : 즉, vocab size만큼의 스칼라가 들어왔을 때, h만큼의 벡터로 만들어주는 것이라고 한다.
<br><br>
: : 중요! 한 칸(단어)씩 밀어서 학습하는 것 (loss 함수부분에서 index 슬라이싱 하는 것)
: : 생성할 때 multinomial을 이용해 샘플링해서 쓰는 이유 -> 사람이 꼭 항상 확률이 높은 단어만 말하지 않는 것처럼, 더 자연스러운 생성을 위해서는 샘플링이 필요할 수 있다.
: : ChatGPT도 위처럼 샘플링해서 뽑아내기 때문에, 생성할때마다 다른 응답이 나오는 것이다. (그런 이유로 argmax로 뽑지 않는 것)
<br><br>
: : temperature가 무한대가 되면 단어전체들이 uniform distribution(균등분포)이 되어서 모델이 무너지게 된다.
: : temperature가 낮아지면 정확성은 높지만 다양성은 떨어지게 된다.
: : temperature가 0 에 근접하게 되면 greedy decoding과 동일하게 나오게 된다.

3. Q&A<br><br>
: : Hugging Face의 BERT 등 오픈소스 라이브러리의 코드를 많이 보는 것을 권장한다.