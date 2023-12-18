---
layout: single
title:  "(12/18) 강천성 멘토님 Github 특강 2회차"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>특강 2회차</h2>
- 주제<br><br>
: : Tag
: : Release
: : Github Action<br><br>

- Semantic Versioning<br><br>
: : <a href="https://spoqa.github.io/2012/12/18/semantic-versioning.html">설명 블로그 주소</a>
: : 버전 명은 X.Y.Z 형태를 보여야 하며, X,Y,Z는 음이 아닌 정수이다.
: : X : Major version
: : Y : Minor version,
: : Z : Patch version
: : ex) 1.11.0.
<br><br>
: : 앞의 숫자가 바뀌면 뒤의 숫자(들)가 초기화된다.
: : 패치 버전

- Github Action<br><br>
: : workflow를 쓰는 이유 : 개발 생산성을 높이는 데 큰 영향을 미친다.
: : ex) pre-commit을 자동화하는 workflow를 짜 본다.
: : 현업에 나가면 당연하게 쓰는 기능들이다.
<br><br>
: <br><b>Case 1. Pre-Commit</b><br><br>
: : 1. Step - ubuntu-latest 버전을 사용하도록 설정
: : 2. Step - 파이썬 버전 설정 (3.11)
: : 3. Step - pre-commit 라이브러리 설치
: : 4. Step - pre-commit 실행
<br><br>
: <br><b>Case 2.  Pytest CI(Anaconda Ver)</b><br><br>
: : 1. Step - ubuntu-latest 버전을 사용하도록 설정
: : 2. Step - 아나콘다 파이썬 버전 설정 (3.11)
: : 3. Step - environmental.yml 에 기록된 파이썬 의존성 라이브러리 설치
: : 4. Step - pytest 모듈 실행
<br><br>
: <br><b>Case 2.  Pytest CI(Pypi Ver)</b><br><br>
: : 1. Step - ubuntu-latest 버전을 사용하도록 설정
: : 2. Step - 파이썬 버전 설정 (3.11)
: : 3. Step - requirements.txt에 기록된 파이썬 의존성 라이브러리 설치
: : 4. Step - pytest 모듈 실행
<br><br>
: : 대회 때는 쓰지 않더라도, 최종 프로젝트에서는 써보길 바람. (pytest)
: : 자바스크립트로 프론트엔드를 짜더라도 비슷한 CI로 구현할 수 있을 것이다.
<br><br>
: <br><b>Case 3. 환경 변수 / 시크릿 불러오기</b><br><br>
: : 1. Step - ubuntu-latest 버전을 사용하도록 설정
: : 2. Step - '.github/variables/constants.env'에 저장된 환경 변수 읽어오기
: : 3. Step - 환경 변수 및 Secret 사용하기
: : \{\{env.변수명}} / \{\{secret.변수명}}
<br><br>
: : API용 Secret Key 등
: : Secrets 를 쓰기 위해서는 해당 repo의 Settings에 들어가야 한다.
<br><br>
: <br><b>실습</b><br><br>
: : Powerpoint 자료와 VOD 보면서 Actions 실습 진행해보기
<br><br>

- Github Project<br><br>
