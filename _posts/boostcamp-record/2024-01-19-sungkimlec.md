---
layout: single
title:  "(1/19) LLM 특강"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>LLM 특강 (업스테이지 CEO Sung Kim)</h2>
<h3>주제 : Upstage Solar : GPT 4.5 level SLM</h3>
<br><br>

1. Upstage<br><br>
: <br><b>시작한 계기</b><br><br>
: : AI가 너무 재미있고, 오래 하고싶다 라는 단순한 계기에서 시작
: : 좋은 동료들과 같이 일하고 싶다
: <br><b>사업 전략</b><br><br>
: : 1) 고객을 찾아가는 방법, 2) 고객이 찾아오게 하는 방법
: : 모든 방법을 강구해서, 손님들이 찾아오도록 해라!
: : 조중동 PR을 했더니 정말 회장님들에게 연락이 왔다 (뭘 할지 결정도 안 한 상태였음) - 100개 미팅 들어감
: : 기업들에서 만들어달라고 하는 것들 수집, 재미있는 아이디어가 많았음
: : ex) 한샘 - 평수에 따라 자동 가구 배치
: : 우선순위를 정해달라고 했더니 잘 못정함
: : 10억의 입장료를 제시
: : 갑자기 우선순위를 갑자기 잘 찾게 됨
: <br><b>3개의 아이템으로 줄어듦</b><br><br>
: : AICC (AI 콜센터) (x)
: : OCR
: : 추천
: : 검색 (NIS)
: <br><b>투자 유치</b><br><br>
: : 제품도 없는 상태에서 316억의 투자를 받게 됨
: : FineTuning도 예술이다... => 결국 학습은 Upstage에서 하고, PackMini로 서빙(?)
: : DocAI 제품 매출 (30+)
: <br><b>검색 AI</b><br><br>
: : ex) '솔방울잣' 이라는 제품이 있는데, 검색해보면 맘대로 형태소분석 토크나이징을 해서 '솔방울'이 검색됨
: : => 제품 
: : 이걸 해결하려면 사전을 만들어서 형태소 분리 하지 않도록 해야 함
: : 계속 새로 나오는 제품의 이름을 사전에 넣으려면, 국어학적 지식이 있어야 한다
: : Elastic Searcher는 형태소 사전에서 다 망가져서 결국 안 되고,
: : 이걸 해결하려면 벡터화해서 비슷한 의미로 검색해주는 건데, 도메인별로 학습을 시켜줘야 함 => 일반화 (x)
: : 창업할 때 무조건 일반화 되는 걸로 찾아야 한다.
: : OpenAI에 사람들이 열광하는 이유(+본인들의 예상보다도 잘되는)는 '일반화'가 되기 때문이다.
: <br><b>LLM 분야로 쉬프팅</b><br><br>
: : 코로나 이후 쇼핑몰들이 휘청하니까, NLP 인력을 LLM으로 전환했다.
: : OpenAI가 MS에게 투자받은 것만 12조(카카오 시총 이상)인데, 이 경쟁자를 두고 이 시장에 과연 들어갈까에 대한 고민을 할 수밖에 없음
: <br><b>Training SLM</b><br><br>
: : 모델 굽는데 비용은 모델 사이즈 B당 1억 든다고 생각하면 된다 (ex. 175B -> 175억)
: : Llama 72B를 구우려면 72억 있어야 하는데, 그걸 구워서 줬다는 거!
: : 그에 비해 Fine-tuning은 돈이 많이 안 들기 때문에 그거부터 시도해보기로 함(상대적으로.. 5천 ~ 1억)
: : 10B 정도를 구우려면 10억이 드는데, 그걸 안 들이려면, 일단 모델을 만들고 weight을 초기화하는 과정에서 Llama에 되어있는 weight을 뿌려보기로 함
: : 이게 원래 말이 안 되는 approach인게, 돌려보니까 바보가 되었다고 함
: : 대부분 여기서 멈췄는데, 추가학습을 해보니 loss가 떨어지고 좋은 성능이 나오기 시작함 (2억 정도의 비용으로)
: : HuggingFace와 협업하면서 추가학습 없이 Merge only등은 빼는 방식으로 리더보드를 정화(?)하고 있다.
<br><br>
: : 예를 들면 다나와라는 쇼핑몰에서 각 브랜드별로 공급하면서 설명을 다는데, 설명은 달라도 같은 상품은 같은 제품으로 분류하는 '원부 매칭'이 필요하다. 근데 사람이 그냥 읽어볼 수밖에 없는데, 이걸 LLM에게 읽도록 시켜서 자동 판별하게 하는 것 (NER 같은 걸로 classification)
<br><br>
: : (지영) 나도 얼른 Comet으로 이런 제품을 만들고 싶다. 일단 개발해서 CJ등 자동 자막 타임스탬프 필요한 곳에다가 영업 해보는 거 어떨까?


3. Q&A<br><br>
: : Q. LLM 공부, 입문하는 방법 / LLM의 특징, 장단점
: : A. 그냥 구글에서 일단 찾아서 해보든가, 하면서 배우는 방법 추천
: : 허깅페이스에 PERT 라이브러리가 있다 (Fine-tuning 라이브러리)
: : LLM이 일반화 될 줄은 몰랐다. LLM 처음 시작은 끝말잇기를 정말 하는 모델을 만들고 싶었던 것이다.
: : 예를 들어 추리소설을 입력시킨 후 뒷말잇기를 하는 것을 처음에 만들려고 했는데, 이게 일반화 되었다!
<br><br>
: : Q. 한 도메인에 안주하는 것은 안 좋은가?
: : A. 한 도메인을 먼저 파면, 그것에서 혁신이 일어나는 경우도 많다. 특히 젊을 때는 한 우물을 제대로 파는 것이 중요하다.
: : CV는 로봇 등의 도메인도 너무 좋다 (ex. 로봇이 계란후라이 하는 훈련...)
<br><br>
: : Q. 현재의 AI 열풍, 사그러들 수 있는가? (내 질문)
: : A. 개발, 투자의 선순환이 일어나야 한다. 보통 3~5년 주기이고, 그래서 그게 일어나면 좋다
: : A2. Next big thing, 알면 좀 알려주시고, 회사에서 보는 건...
: : **AGI**가 10년 안에 온다고 보는 사람들이 많아졌다. 나와 상관있는 일이 되어가고 있는 것.
: : 가장 많이 일어나는 곳이 우선은 일의 현장에서 일어날 것이다.
: : ex) 영수증 타이핑 등... 일이니까 싫지만 그냥 시켜서 하는 일들에 대해서 먼저 AGI로 인한 자동화가 가장 먼저 들어올 것이다.
: : 기계가 들어온 것도 결국 같은 맥락. 밭을 매는 게 힘드니까 한 것이다.
: : 하기 싫은 것부터 점점 들어올 것인데, 그게 주위에 뭔지 찾아봐라.
: : ex) 길게 운전하기 싫다. 그런것을 대치해나가는 것이다.
: : 결국 일에서 일어날 것이고, MS도 정확히 그렇게 생각하고 있다.
: : MS에서 한국을 빼고 Office 365에 Copilot 출시했는데, 이런 일에서의 싫은 것을 줄여주는 게 next big thing.
: : 그 외의 next big thing은, LLM에 Hallucination이 있는데,
: : 'Hallucination is all we need'가 되는 세상이 올 거라고 보는데,
: : 역사적으로 엉뚱하게 발명된 것들이 있는데, 약간 Educated 엉뚱함이라고 보는 것이다.
: : LLM에게 약간의 Educated Hallucination을 유도해내면, '세상에 없는 것'을 만들어내지 않을까?
: : 이런 것이 바로 AGI 이전의 Next big thing이라고 생각한다!
<br><br>
: : Q. 어떻게 역량을 쌓아서 기업에 어필해야 할지?
: : A. Upstage에 현재 Creative한 것들을 연구하는 분들이 적다. Follower 느낌이다. 우리 회사도 뭔가를 만들고, 구글이나 페이스북에서 우리가 만든 것을 가져다 썼으면 좋겠다고 생각한다. Fundamental하게 뭔가를 바꾸는, Transformer 같은 것을 누군가 만들면 좋겠다고 생각한다.
<br><br>
: : Q. 인공지능이 가져다줄 위협
: : A. 이미 발전은 돌이킬 수 없고, 우리에게 해를 끼치냐 아니냐로 판단해야 하는 문제가 되어가고 있다.
: : 우리가 모기는 죽이고 고양이는 안 죽이는 이유를 생각해보라.
: : AI는 AI로 죽여야 한다...? ㅋㅋ
: : 총을 가진 누군가가 있으면 나도 총이 있어야 하고, 누가 핵을 갖고 있으면 나도 핵을 갖고 있어야 하는 것처럼
: : 나도 강력한 AI가 있어야 한다...
<br><br>
: : Q. 모두를 위한 머신러닝/딥러닝 강의 찍은 이유?
: : A. "인공지능이 여러분을 대체하는 것이 아니고, 인공지능을 쓰는 사람이 여러분을 대체한다"
: : 위의 맥락에서, '컴퓨터 전공하는 사람이 딥러닝 모르면 힘들 것 같은데?' 라는 생각에서 같이 나누려고 해서 찍게 되었다.
<br><br>
: : Q. 작은 GPU에서 솔라 파인튜닝 하는 법
: : A. LM Studio라는 걸 다운받으면, 거기 사이즈별로 솔라 quantization 해놨음. 거기서 해보면 파인튜닝 잘 됨
<br><br>
: : Q. LLM 서비스가 어떻게 수익을 내는지?
: : A. B2B를 하니까, API로 제품을 판다.
: : 우리가 가서 손님을 만나기는 힘든데, 손님이 우릴 찾아오게 하면 쉽다.
: : 1년에 10억을 써도, 20억을 벌면 되는 것.
: : AskUp은 많은 분들이 좋아해주고 계셔서 유지가 된다. 아숙업이라는 부캐를 통해 우리의 본 사업을 찾아오게 된다.
: : OpenAI 처럼 API로도 수익화 가능
: : 여러가지로 수익화 할 수 있는 방법들이 생겨나고 있다고 본다.
<br><br>
: : Q. B2B 할 때 모델 성능 설명 어떻게?
: : A. 고객사에게 직접 시험을 만들어보라고 하는 것이 도움이 된다.
<br><br>
: : Q. ai지식과 코딩 모두 중요하겠져?
: : A. OpenAI에서도 아이디어만 있는 사람보다는 구현까지 빠르게 할 수 있는 사람이 더 잘 대우를 받는다고 한다. 그런 의미에서, 아이디어와 기술 두 가지가 조화를 이루어야 할 것 같다.
<br><br>
: : Q. 어떻게 공부 시작해야?
: : A. 함정이 자꾸 공부를 하려고 하지 말고, 일단 만들려고 덤벼라. 그 과정에서 더 공부가 자연스럽게 될 것 같다.
<br><br>
: : 내가 수학이 조금 모자라고 손이 빠르다면, 차라리 장점을 극대화하고 수학을 잘 하는 사람과 동료가 되면 된다. 그것이 훨씬 효용이 크다.
<br><br>
: : GPU 비용 어떻게 감당?
: : 작은 모델 사용해보거나, 지원사업 지원해보거나, 아니면 그냥 이메일을 막 보내라. 너네꺼 파인튜닝해서 성능 잘나오는데, GPU 열장만 줘라! 하면 진짜 받을 수도 있음. 허깅페이스, Stable Diffusion 등 그런 곳에 막 들이대봐라. PolyGlot이라는 프로젝트도 그런 배경에서 시작되었다고 한다.