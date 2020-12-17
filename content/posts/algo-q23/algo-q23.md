---
title: Algorithm Question 정수 내림차순으로 배치하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 정수 내림차순으로 배치하기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 정수 내림차순으로 배치하기

함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

##### I/O Examples

| n      | return |
| :------: | :----: |
| 118372 | 873211 |

<br>

### 👨‍💻 Question답안

```javascript
function solution(n) {
  return +((n + "").split("").sort((a, b) => b - a).join(""));
}
```
<br>
#### Source from Others

```js
function solution(n) {
  const newN = n + "";
  const newArr = newN
    .split("")
    .sort()
    .reverse()
    .join("");
  return +newArr;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)