---
title: Algorithm Question 핸드폰 번호 가리기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 핸드폰 번호 가리기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 핸드폰 번호 가리기

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 `*`으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

##### I/O Examples

| phone_number | return             |
| :------------: | :------------------: |
| 01033334444  | \*\*\*\*\*\*\*4444 |
| 027778888    | \*\*\*\*\*8888     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(phone_number) {
  var phoneArr = phone_number.split("");
  for (let i = 0; i < phone_number.length - 4; i++) {
    phoneArr[i] = "*";
  }
  return phoneArr.join("");
}
```
<br>
#### Source from Others

```js
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)