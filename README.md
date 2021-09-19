<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://hayanmind.com/">
    <img src="https://user-images.githubusercontent.com/37607373/133915119-aa536ec2-bbbf-4b09-8618-d6a9168b371f.jpg" alt="hayanmind logo" width=150 />
  </a>

  <h3 align="center">무한 스크롤 리스트</h3>
  
  <p align="center">
    프리온보딩 코스 HayanMind 기업 과제
    <br />
    <br />
    <a href="https://infinite-scroll-list.netlify.app/">View Demo</a>
  </p>
</p>

<!-- Assignment Requirements -->
<details>
  <summary>📋 과제 요구사항 보기</summary>
  <div markdown="1">

#### Assignment

The main technical stack for HayanMind front-end developer is "React". Mobile applications are implemented as "React Native", and web projects use "React". In this assignment, we will implement an infinite scroll list using React.

#### Requirement

- Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

<p align="center">
  <img width="450" src="https://user-images.githubusercontent.com/6203798/125564989-392a721b-1a89-49cd-a5fc-081022711c9b.gif" />
</p>

#### Data API

- The user's dummy comment data can be called through the API below.
  - https://jsonplaceholder.typicode.com/comments
- The following parameters are supported:
  - `_page`
    - it starts at 1.
  - `_limit`
    - Please set the `_limit` parameter to 10.
- Example of the first comment page
  - https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10
- Sample data

```JSON
[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
]
```

#### Design

- Please look at the following design guide link and reflect the design.
  - [https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA](https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA)

<p align="center">
  <img width="450" src="https://user-images.githubusercontent.com/6203798/125565329-c6144364-a519-4028-84bc-5786b5d2af40.png" />
</p>
    
  </div>
</details>

## About The Project

<p align="center">
  <img src="https://user-images.githubusercontent.com/37607373/133915413-fbcb71b4-e51e-48fd-8044-5f519a7d1bfa.gif" alt="project screenshot" height=600 />
</p>

### Built With

- React
- TypeScript
- axios
- styled-components

## Getting Started

### Installation

To install packages:

```sh
npm install
```

To serve the app:

```sh
npm start
```

## Features

- Intersection Observer를 활용한 무한 스크롤 리스트 구현
- axios를 활용해 API 클래스 util 작성

## Refactoring

- Intersection Observer 로직을 분리해 useOnScreen 커스텀 훅 작성
- TypeScript로 변환
