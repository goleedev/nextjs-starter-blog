---
title: Algorithm Question 자연수 뒤집어 배열로 만들기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 자연수 뒤집어 배열로 만들기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 자연수 뒤집어 배열로 만들기

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

##### I/O Examples

| n     | return      |
| :-----: | :-----------: |
| 12345 | [5,4,3,2,1] |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
  var answer = (n + "").split("").reverse().map((i) => Number(i));
  return answer;
}
```
<br>
#### Source from Others

```js
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));
    // 숫자풀이
    var arr = [];
    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);
    return arr;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)