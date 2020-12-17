---
title: Algorithm Question 두 정수 사이의 합 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 두 정수 사이의 합
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 두 정수 사이의 합

두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

##### I/O Examples

| a    | b    | return |
| :----: | :----: | :------: |
| 3    | 5    | 12     |
| 3    | 3    | 3      |
| 5    | 3    | 12     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(a, b) {
  var answer = 0;
  var numbers = [];
  if(a < b) {
​    for (let i = a; i <= b; i++) {
​      numbers.push(i);
​    }
  } else {
​    for (let i = b; i <= a; i++) {
​      numbers.push(i);
​    }
  }
  return answer = numbers.reduce((pv, cv) => pv + cv, 0); ;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)