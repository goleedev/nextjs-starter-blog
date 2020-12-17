---
title: Algorithm Question 정수 제곱근 판별 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 정수 제곱근 판별
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 정수 제곱근 판별

임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

##### I/O Examples

| n    | return |
| :----: | :----: |
| 121  |  144   |
| 3    |   -1   |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var answer = 0;
  var x = Math.sqrt(n);
  Number.isInteger(x) ? answer = (x + 1) * (x + 1) : answer = -1;
  return answer;
}
```
<br>
#### Source from Others

```js
function solution(n){
  switch(n % Math.sqrt(n)){
    case 0:
      return Math.pow(Math.sqrt(n) + 1, 2);
    default:
      return -1;
  }
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)