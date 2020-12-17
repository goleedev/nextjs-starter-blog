---
title: Algorithm Question 문자열 내림차순으로 배치하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - 문자열 내림차순으로 배치하기

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 문자열 내림차순으로 배치하기

문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

##### I/O Examples

| s         | return    |
| :---------: | :---------: |
| "Zbcdefg" | "gfedcbZ" |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(s) {
    return s.split('').sort().reverse().join('');
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)