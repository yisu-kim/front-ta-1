# HayanMind Front-End Technical Assignment

## Assignment #1

The main technical stack for HayanMind front-end developer is "React". Mobile applications are implemented as "React Native", and web projects use "React". In this assignment, we will implement an infinite scroll list using React.

### Requirement

- Implement the user's comment data list with infinite scrolling by getting more 10 comments repeatedly.

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/6203798/125564989-392a721b-1a89-49cd-a5fc-081022711c9b.gif" />
</p>

### Data API

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

### Design

- Please look at the following design guide link and reflect the design.
  - [https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA](https://www.figma.com/file/T9P3B5qjnTqhWi1Ou5BmIL/HayanMind-FrontEnd-TA)

<p align="center">
<img width="450" src="https://user-images.githubusercontent.com/6203798/125565329-c6144364-a519-4028-84bc-5786b5d2af40.png" />
</p>

### Getting started

```shell
npm install
npm start
# http://localhost:3000
```

### Try it

https://infinite-scroll-list.netlify.app/

### Reference

- [Intersection Observer API - Web APIs | MDN](https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API)
- [[React] Intersection Observer API로 Infinite Scroll 구현하기](https://velog.io/@dev-hannahk/react-intersection-observer)
