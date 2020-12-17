---
title: Algorithm Question 문자열 내 마음대로 정렬하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - 문자열 내 마음대로 정렬하기

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 문자열 내 마음대로 정렬하기

문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 [sun, bed, car]이고 n이 1이면 각 단어의 인덱스 1의 문자 u, e, a로 strings를 정렬합니다.

##### I/O Examples

| Arr               | divisor | return            |
| :-----------------: | :-------: | :-----------------: |
| \[sun, bed, car]   | 1       | \[car, bed, sun]   |
| \[abce, abcd, cdx] | 2       | \[abcd, abce, cdx] |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(strings, n) {
​    return strings.sort((a, b) => {
​      if(a[n] > b[n]) return 1;
​      if(a[n] < b[n]) return -1;
​      if(a[n] === b[n]) return a.localeCompare(b);
​    })
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)