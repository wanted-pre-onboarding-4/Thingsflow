# Assginment #4

## 🎯 프로젝트 목표

#### 띵스플로우 과제
- 특정 깃헙 레파지토리(https://github.com/angular/angular-cli)의 이슈 목록과 상세 내용을 확인하는 웹 사이트 구축

## ⏰ 프로젝트 기간

#### 2022-09-13 ~ 2022-09-15

## :link: 프로젝트 링크

https://angularissue.netlify.app

## :nut_and_bolt: 구현 기능

#### 공통

- [x] 두 페이지는 공통 헤더를 공유합니다.
- [x] 헤더에는 Organization Name / Repository Name이 표시됩니다.



#### issues / issue 리스트 페이지

- [x] 이슈 목록 가져오기 API 활용
- [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- [x] 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- [x] 다섯번째 셀에는 광고 이미지 출력
- [x] 광고 이미지 클릭 시 https://thingsflow.com/ko/home로 이동
- [x] 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)



#### detail / 상세 페이지

- [x] 이슈의 상세 내용 표시
- [x] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시



#### 그 외 필수 요구 사항

- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] Context API를 활용한 API 연동
- [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
- [x] 데이터 요청 중 로딩 표시
- [x] UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현 

#### 그 외 선택 사항

- [x] 에러 화면 구현
- [x] CSS-in-JS 구현


## :hammer: 사용 스택

![ReactJS](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)



## 프로젝트 구조

```bash

```



## :handshake: 프로젝트 팀원

| 이름          |                 역할                             |
| ------------- | :----------------------------------------------: |
| 설재혁 / 팀장 |            구현된 코드 리팩토링                   |
| 김명원        | 전체적인 기능 구현 |
| 박보선        |         구현된 코드 리팩토링          |
| 김지혜        |          구현된 코드 리팩토링          |
| 이시형        |        구현된 코드 리팩토링        |
| 홍주완        |    구현된 코드 리팩토링    |
| 이후경        |                 구현된 코드 리팩토링                 |



## 📖 WiKi

- [Git-Flow](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#git-flow)
- [Commit-Convention](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#commit-convention)
- [IntersectionObserver](https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver)
- [Context](https://ko.reactjs.org/docs/context.html)
- [github access token 등록 방법 참고 자료](https://dev.classmethod.jp/articles/resolving-github-token-authentication-errors/)


## 🖥 Getting Started

## installed dependencies

- react-router-dom
- axios
- styled-components
- eslint
- prettier
- husky

## Usage

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/Thingsflow.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Set` environment variables

      1. 내려받은 프로젝트의 최상위 폴더 안에 `.env` 파일을 생성합니다.

      2. `.envTemplate` 파일에 존재하는 환경 변수 이름과 같은 이름의 환경 변수를 `.env` 파일 안에 생성합니다.

      3. `.env` 파일 내에 알맞은 환경 변수 값을 설정해 줍니다.

4. `start` the project

   ```markdown
   $ npm start
   ```


# 🎞 프로젝트 회고

## 재혁

이번 프로젝트는 동료 학습이 제대로 이루어지지 않은 것 같아 아쉽습니다. 이번 프로젝트를 반면교사로 삼아 다음 프로젝트는 더욱 효율적인 프로젝트가 되었으면 좋겠습니다!

## 명원

팀과의 협업 부분에서 아쉬움이 있었습니다. 라이브러리를 쓰지 않고 인피니트 스크롤을 만드는 부분이 좋은 경험이 되었고  커스텀 훅을 만들어 보는 좋은 경험을 하였습니다.

## 보선

IntersectionObserver를 처음 사용해보면서 해당 기능의 설명을 읽어보면서 처음 무한 스크롤을 구현해보면서 IntersectionObserver 이해할 수 있어 좋은 경험이였습니다.

## 지혜

타입지정과 data를 받아오는 과정에서 어려움이 있었고, 개인적으로 해결하지 못한 요소들도 있었지만 팀원들의 코드를 보며 배울 수 있는 기회였습니다.

## 시형

타입스크립트를 사용하면서 많이 배웠고, 다른 팀원들의 코드를 보면서 조금 더 성장할 수 있었습니다.

## 주완

이번 프로젝트에서는 다른 일이 많이 겹쳐서 로그인 스피너를 구현해 보았습니다. 다음번 과제에서는 좀 더 열심히 하여 많은 부분을 해보도록 노력하겠습니다.

## 후경

연휴기간에 나름대로 타입스크립트를 공부하고 프로젝트를 진행하였으나 짧은 시간의 학습으로는 부족함이 많다는 것을 체감하였습니다.

