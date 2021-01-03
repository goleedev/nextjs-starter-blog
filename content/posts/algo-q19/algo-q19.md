---
title: Algorithm Question 문자열 다루기 기본 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 문자열 다루기 기본
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 문자열 다루기 기본

문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

##### I/O Examples

| s      | answer |
| :------: | :------: |
| "a234" | false  |
| "1234" | true   |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(s) {
  var answer = true;
  var numbers = /^[0-9]+$/;
  if (s.length === 4 || s.length === 6) {
​    s.match(numbers) ? answer =true : answer = false;
  } else {
​    answer = false;
  }
  return answer
}
```
<br>
#### Source from Others

```js
function strToInt(str){
  return str/1
  }
//
function strToInt(str){
  return  +str;
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)