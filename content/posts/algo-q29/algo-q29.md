---
title: Algorithm Question x만큼 간격이 있는 n개의 숫자 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - x만큼 간격이 있는 n개의 숫자
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - x만큼 간격이 있는 n개의 숫자

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

##### I/O Examples

| x    | n    | answer       |
| :----: | :----: | :------------: |
| 2    | 5    | \[2,4,6,8,10] |
| 4    | 3    | \[4,8,12]     |
| -4   | 2    | \[-4, -8]     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
```
<br>
#### Source from Others

```js
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
//
function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)