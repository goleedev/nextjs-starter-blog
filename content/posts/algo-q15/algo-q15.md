---
title: Algorithm Question 수박수박수박수박수박수? 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 수박수박수박수박수박수?
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 수박수박수박수박수박수?

길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

##### I/O Examples

| n    | return     |
| :----: | :----------: |
| 3    | "수박수"   |
| 4    | "수박수박" |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var answer = [];
  if (n % 2 === 0) {
​    while (n > 0) {
​      if (n % 2 === 0) {
​        answer.push("수");
​        n -= 1;
​      } else {
​        answer.push("박");
​        n -= 1;
​      }
​    }
  }
  if (n % 2 === 1) {
​    while (n > 0) {
​      if (n % 2 === 1) {
​        answer.push("수");
​        n -= 1;
​      } else {
​        answer.push("박");
​        n -= 1;
​      }
​    }
  }
  return answer.join("");
}
```
<br>
#### Source from Others

```js
function waterMelon(n){
  var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
  return result.substring(0,n);
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)