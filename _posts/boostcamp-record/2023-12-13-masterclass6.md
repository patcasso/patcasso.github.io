---
layout: single
title:  "(12/13) 마스터클래스 6"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>마스터클래스 6 : Representation Learning & Recent Trends</h2>
by 정상근 마스터님

- 인트로<br><br>
: : 우리가 살고 있는 시대는 데이터의 시대
: : 눈앞의 공부만 하지 말고 한발짝 물러나서 볼 필요가 있다.
: : 데이터가 기하급수적으로 증가 (스마트폰으로도 데이터를 생산하며 지수적 증가 추세를 보인다)
: : Sensor Data(IoT)가 가장 많이 생기고 있다. 즉 기계가 기계, 혹은 기계가 관리자를 위해 만들고 있는, 쌓여가는 데이터가 모든 데이터의 반 이상이다.
<br><br>
: : 현재는 과거 시대와 너무 다른 것이, 100년 전에는 한 동네에서 가장 똑똑한 사람은 동네의 촌장
: : 즉, 본인의 인지 범위 안에서 좋은 결정이 나오던 시대
: : 우리가 현재 사는 시대는, 신체가 가진 물리적인 시계의 한계는 그대로인데,
: : 내가 모두 소화할 수 없는 이 데이터들을 모두 소화할 수 있게 해 주는 것이 바로 AI라는 것이다. 단지 이 이유 뿐인 것이다.
: : 데이터의 시대에서 개인은 데이터로부터 소외될 수 있는데, 소외되지 않기 위해 인공지능이 필요할 수 있다는 것이다.
<br><br>

- 상징 <br><br>
: : 인류의 발전은 기호의 발전과 궤를 같이 한다.
: : 기호 체계가 다 깨져가고 있다.
: : Neural Network는 이 모든 기호체계를 파괴하겠다는 것 
: : Representation Paradigm Shift
: : 이제 vector database로, 세상의 모든 것들을 key-value가 아닌 숫자들로 담아내겠다 라는 paradigm shift인 것이다.
<br><br>

- Self-Supervised Learning<br><br>
: : 압도적으로 많은 스케일이 필요
: : BERT와 ELMO가 나온 2018년부터 폭발적으로 늘어남
: : 현재는 Self-supervised learning의 시대라고 봐도 되며, 모든 학습이 이를 통해 일어나고 있다.
<br><br>
: <br><b>Generative</b><br><br>
: : Autoencoder (AE)
: : 사람의 간섭이 필요없음.
: : 인코딩과 디코딩 과정을 거치게 되는데,
: : 데이터를 수억개를 부어주고, 요약 및 생성을 하게 된다.
: : 이 과정에서 세상 만물을 이해할 수 있게 되고,
: : 이를 통해 데이터베이스화 할 수 있고 임베딩이 된다.
: : 노이즈까지 넣어주면, 이에 대한 학습도 진행할 수 있다.
: : BERT, GPT 모두 다 이 방식으로 훈련되었다.
<br><br>
: : Meta에서 발표한 BART는 Encoder, Decoder에서 Self-supervised 학습을 하게 했다.
: : 토큰 마스킹, 순서 바꾸기 등으로 손상된(괴롭히는) 데이터를 넣어주고, 오리지널 형태가 나올 수 있도록 학습시키는 것
<br>
: <br><b>Contrastive</b><br><br>
: : 비전쪽에서 온 개념인데, Siamese Network(샴 네트워크)를 이용
: : 원래 사진을 변형하여 데이터 증강의 형태로 학습
<br><br>
: <br><b>Generative-Contrastive</b><br><br>
: : Generate Complete Input
: : Recover Partial Input
<br><br>
: : Colorization, Super-solution, Inpainting 등의 과정을 거친다
: : DALL.E가 이러한 학습을 통해 구현되었다.
: : BERT masked langauge model도 같은 원리이다.
<br><br>
: : 인공지능의 성능을 가장 크게 좌우하는 것은 모델 사이즈와 데이터 크기라는 것을 발견했다.
: : nvidia GPU 많이 사고 인터넷 데이터 다 쓰면.. 좋아진다...
: : Self-supervised learning이 supervised learning을 대체하고 있다고 한다.
<br><br>
: : "Foundation Model" - 모든 데이터를 이해할 수 있는 모델이라는 새로운 명칭
: : "문명 모델" - 우리가 가진 모든 문명을 요약시켜놓은 모델이 아닐까?
<br><br>
: : 그럼 앞으로의 세상은 어떻게?
: : Smart Work Flow가 생길 것이다
: : 우리가 살아갈 시대에서 인간의 역할은 "문제 정의"가 될 것이다.
: : 현재는 "문제 풀이"를 잘 하는 위주의 교육인데, 기계가 더 잘 할 것이므로,
: : '어떤 문제를 기계에게 던져줄 것인가'가 더욱 중요한 시대가 올 것이다.
<br><br>

- Q&A<br><br>
: : Q. 그럼 Human Feedback도 점점 필요없어지나?
: : A. 마치 영구기관처럼, 기계가 기계를 가르치고 이것이 계속 반복되는 것이 가능하지 않나 라고 의심하고 계심. 물리법칙과는 조금 다른 것 같다. 
: : 한 에이전트가 여러 에이전트를 만들면 그들이 이루는 집단 지성이 생기고, 지혜로운 솔루션을 그들끼리 내림으로써 점점 더 휴먼 피드백이 줄어드는 방향으로 갈 것 같다.
