---
title: Algorithm Question 행렬의 덧셈 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 행렬의 덧셈
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 행렬의 덧셈

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

##### I/O Examples

| arr1          | arr2          | return        |
| :-------------: | :-------------: | :-------------: |
| \[\[1,2],\[2,3]] | \[\[3,4],\[5,6]] | \[\[4,6],\[7,9]] |
| \[\[1],\[2]]     | \[\[3],\[4]]     | \[\[4],\[6]]     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(arr1, arr2) {
  var answer = Array();
  for (let i = 0; i < arr1.length; i++) {
​    answer[i] = [];
​    for (let j = 0; j < arr1[0].length; j++) {
​      answer[i][j] = arr1[i][j] + arr2[i][j];
​    }
  }
  return answer;
}
```
<br>
#### Source from Others

```js
function solution(arr1, arr2) {
	return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)