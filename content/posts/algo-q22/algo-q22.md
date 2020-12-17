---
title: Algorithm Question 자릿수 더하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 자릿수 더하기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 자릿수 더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

##### I/O Examples

| N    | answer |
| :----: | :------: |
| 123  | 6      |
| 987  | 24     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var sum = 0;
  while(n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
```
<br>
#### Source from Others

```
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)