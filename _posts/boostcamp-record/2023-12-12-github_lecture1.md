---
layout: single
title:  "(12/12) 강천성 멘토님 Github 특강"
categories: boostcamp-record
sidebar:
  nav: "docs"
---

<h2>Github 가이드</h2>
- GitFlow<br><br>
: : Local 중심 Branch 전략
: <br><b>Branch 설명</b><br><br>
: : main - 여기는 commit 하면 안 됨(hotfix의 경우 제외하고는)
: : develop - 주로 메인 개발 브랜치인데, 여러명의 개발자가 있으면 conflict 나니까 보통 하나 더 들어가서 feature 브랜치에서 작업함
: : feature - 기능 개발 branch. commit 컨벤션을 잘 따른다.
<br><br>

- GitHub Flow<br><br>
: : GitHub Flow는 Remote 중심 Branch 전략
: : 배포의 중심이 되는 main 브랜치와 각각의 feature 브랜치로 구성된다.
<br><br>

- Commit Convention<br><br>
: : 유다시티 Commit Convention
: : Issue Tag를 쓰면 링크를 붙일 수도 있다고 한다.
<br><br>

- Pre-commit<br><br>
: : Pre-commit은 git commit 수행할 때 정해진 스크립트들을 수행할 수 있게 도와주는 툴
: : 예를 들어 코드를 정리해주는 black 등
: : **(내 질문) pre-commit의 black과 별도로 저의 로컬 환경에 자동 포매터가 설치된 경우(예: prettier), 팀 작업시 black의 자동 포매팅과 충돌할 위험이 있을까요?**
: : 충돌 당연히 날 수 있다.
: : flake8보다 black이 조금 더 빡세게 바꾼다.
: : 그래서 하나 지우거나, flake8을 black에 맞추거나 해줘야 하고
: : 충돌 날 수 있어서 commit 안 될 수 있다.
: : 그냥 수동으로 설정해서 팀 프로젝트에는 적용되지 않도록 하는 것이 좋다
<br><br>

- Issue<br><br>
: : '개발 작업 단위'이고, 작업의 History를 관리하기 위해 작성하는 것이 좋다.
: : Commit Message나 History만 본다고 잘 생각 안 난다.
: : ex) feat-3/branch-name (3번 Issue를 해결하는 기능 구현 브랜치라는 의미)
<br><br>

- Issue Template<br><br>
: : Github Settings에서도 설정 가능하고, 아니면 프로젝트 폴더에 직접 md 형식 맞춰 만들어도 된다.
<br><br>

- Pull Request<br><br>
: : Merge 전에 같은 팀원에게 코드 리뷰를 받는 단계
: : Squash and merge: 커밋 로그들을 하나로 합치면서 Merge
: : Rebase and merge: Merge 커밋을 남기지 않으면서 기존 커밋 로그를 유지하는 형태로 Merge
<br><br>
: : PR Template
: : Overview, Change Log, To Reviewer, 관련 Issue Tag 기록

- 실제 프로젝트시<br><br>
: : 개발해야 하는 Feature에 대한 Issue를 먼저 나열해서 다 연다.
: : 본인이 해야 하는 feature를 assign 한 후에
: : Feature 브랜치 따고
: : Push 해서 PR 열고
: : 리뷰 받고 Merge 하고 의 파이프라인을 지킨다!
<br><br>
: : 이렇게 하면 GitHub로 칭찬 무조건 듣는다!
: : 처음부터 예쁘게 잘 쓰려고 할 필요는 없다. (사실상 불가능하다)
: : 나중에 수정할 수 있는 것들은 괜찮지만, 예컨대 Pull Request는 Squash and merge 한 이후에는 고치기가 거의 불가능하다.
: : 목숨걸고 잘 해야 하는 것은 Issue 라는 것을 쓰는 것, 그리고 Commit Log를 컨벤션에 맞게 쓰는 것(찍히는 순간 지옥이다), 그리고 Pull Request 제목 등 Merge 되었을때 찍혀버려서 못 고치는 것들을 꼭 신경 써라
<br><br>

- 다음 시간 예고<br><br>
: : Milestone
: : Projects
: : Actions (pre-commit, pytest 등)