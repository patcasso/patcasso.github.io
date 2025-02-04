---
layout: single
title:  "(12/07) 마스터클래스 5"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>마스터클래스 5 : ChatGPT</h2>
(주재걸 마스터님)
- Scaling Law<br><br>
: : 더 큰 모델일수록 로스 그래프가 떨어지는 형태도 스몰 모델보다 더 빠르게 떨어지고, 최종 성능도 더 좋다
: : 학습이 효율적인 지점은 Loss가 수렴하기 한참 전에 끝남

- LM 성능의 3요소<br><br>
: N: 매개변수 수
: D: 학습 토큰 수
: C: 학습 계산량 (학습 시간)
: : N과 D가 동시에 늘어나야 최적의 효율이 난다 (ex. 모델 크기 8배, 데이터셋 크기 5배)
<br><br>
: : Sparse Transformer
: : GPT-3 는 전체가 아닌, 부분 Attention을 계산한다
<br><br>
: : 6.7B 이상 모델에서 몇몇 Task 정확도가 급격히 상승한다 (In few shot learnings)
: : Emergent Abilities : 작은 모델에선 나타나지 않다가 큰 모델에서 갑자기 나타나는 능력
<br><br>
: : Paradigm Shift
: : GPT-3에서는 Engineering이 Prompt이다?!
: : Prompt 찾기
: : 각 Task에 알맞은 Prompt 를 찾을 필요가 있음
<br><br>
: : 모델이 의도에 맞게 Prompt를 해석하게 할 수 없을까?
<br><br>

- Finetuned Language Net (FLAN)<br><br>
: : 평서문 위주의 데이터가 아닌 추가적인 데이터셋으로 학습시켰더니 zero-shot 성능이 향상되었다.
: : (평서문이 아닌 질문, 명령조로 input - target 학습을 시켰다)
: : 다양한 Task를 학습시킬수록 Held-out task 의 성능 향상<br><br>
- LLaMA의 GPT와의 차별점<br><br>
: : GPT4는 아직 파라미터나 체크포인트 공개 안 되어있다.
: : Llama2는 파라미터나 체크포인트가 다 공개가 된 모델
: : 상업적으로는 조금 제한을 두었다고 함
: : 구조적 차이 in 강의 자료
: : Llama2는 성능이 GPT4보다는 안 나오는 것 같음
<br><br>
: : Model Alignment 시의 고려 사항
: : Model Alignment는 모델에 새로운 지식이나 능력을 주입하진 않음
: : 모델 내에 이미 있는 지식이나 능력을 이끌어내는 역할을 수행 (이게 챗봇에서 시도해볼 수 있는 학습 아닐까?)
: : Alignment로 인한 Downstream task 정확도의 하락 가능성이 존재
: : overfitting 등을 조심해야한다.


- Q&A<br><br>
: **Q1**. 우리나라 기업의 현재 LLM 기술 수준?<br>
: **A** : 아직 OpenAI보다는 못미치고 있다고 볼 수 있다.
<br>그럼 한국형 LLM 과연 개발 해야하는가?
<br>그래도 Fast-follower의 형태로라도 최대한 꼭 기술을 빨리, 필적할만한 수준으로 따라잡는 게 중요하다고 생각하심.
<br>(ex. 대기업의 ChatGPT 사용 금지)
<br>GPT-4에 전적으로 의존해서 사업하는데, 해당 모델에 문제가 생기거나 하면 사업 자체가 문제가 생길 수 있다.
<br>의존성 해결의 관점, 휘둘리지 않기 위해!
<br>또 우리나라 현지의 데이터들 (카페 블로그 지식인 등등)이 반영이 안 된 부분들도 있을 것이다. 
<br>물론 아무나 할 순 없지!
<br><br>
: **Q2**. 앞으로 NLP 기술 연구 및 산업의 전망? 산학계에서 주목해야 할 연구주제 및 핵심 역량?
: **A**: 프롬프팅에 대한 중요성!
<br>그러나 이런 것들은 파라미터나 등을 전혀 건드리는 것이 아니므로,
<br>프롬프트 엔지니어링이 얄팍하다고 폄하하는 분도 계시겠지만, 
<br>이것도 그것대로 굉장히 중요한 역량이라고 생각하신다.
<br><br>
: : 내가 하는 일에서 어떻게 ChatGPT 등을 잘 활용하면 생산성이 향상될지?
<br>-> 멀티턴(프롬프트는 어떻게 구성하고, 맘에 안 드는 답이 나오면 refine하고 등 일련의 과정 상에서의 노하우 등이 중요할 것이다)
<br>-> 실제로 많이 써봐야 한다. 사례도 쫓아가며 공부해봐야 한다.
<br>-> 실제 오픈소스 모델(ex. 라마2) 등을 다운받아서 fine-tuning 진행할 수 있고 등 원래부터 AI 개발자들이 해왔던 중요 역량이므로, 
<br>경량화, 학습 효율화 등의 전통적 AI 기술들도 병행하나가야 할 것 같고,
<br>-> 새로운 논문 / 기술들이 쏟아지는 만큼, 평소에 비슷한 레벨로 스터디하는 그룹을 잘 형성해서 서로의 공부한 내용이나 정보들을 효율적으로 빠르게 잘 공유하는 것이 중요하다 (스스로 이러한 환경을 조성하기)
<br><br>
**Q3**. 대학원 진학을 원한다면 산발적인 경진대회 등 참여보다는 실제 연구실 등에서 논문 참여할 수 있는 기회를 만들어라.
