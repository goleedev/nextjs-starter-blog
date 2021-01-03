---
title: Algorithm Question 가운데 글자 가져오기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 가운데 글자 가져오기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 가운데 글자 가져오기

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

##### I/O Examples

| n       | return |
| :-------: | :------: |
| "abcde" | "c"    |
| "qwer"  | "We"   |

---

### 👨‍💻 Question 답안

```javascript
function solution(s) {
​    var answer = '';
​    if(s.length % 2 === 0) {
​      answer = s.substring(s.length/2 - 1, s.length/2 + 1);
​    } else {
​      answer = s.slice(s.length/2, s.length/2 + 1);
​    }
​    return answer;
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)