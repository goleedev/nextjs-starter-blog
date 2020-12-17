---
title: Algorithm Question 하샤드 수 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 하샤드 수
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 하샤드 수

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

##### I/O Examples

| arr  | return |
| :----: | :----: |
| 10   |  true  |
| 12   |  true  |
| 11   | false  |
| 13   | false  |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var answer;
  var sumDigits = (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
  n % sumDigits === 0 ? answer = true : answer = false;
  return answer;

}
```
<br>
#### Source from Others

```js
function Harshad(n){
  return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)