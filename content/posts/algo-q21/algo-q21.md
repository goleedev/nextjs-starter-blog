---
title: Algorithm Question 약수의 합 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 약수의 합
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 약수의 합

정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

##### I/O Examples

| n    | return |
| :----: | :------: |
| 12   | 28     |
| 5    | 6      |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var sum;
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  sum = answer.reduce(function(a, b){
    return a + b;
  }, 0);
  return sum;
}
```
<br>
#### Source from Others

```js
function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)