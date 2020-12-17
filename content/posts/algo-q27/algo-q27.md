---
title: Algorithm Question 평균 구하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 평균 구하기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 평균 구하기

정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

##### I/O Examples

| arr       | return |
| :---------: | :----: |
| \[1,2,3,4] |  2.5   |
| \[5,5]     |   5    |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(arr) {
  return (arr.reduce((acc, curr) => acc + parseInt(curr), 0))/arr.length;
}
```
<br>
#### Source from Others

```js
function average(array){
  return array.reduce((a, b) => a + b) / array.length;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)