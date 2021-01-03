---

title: Algorithm Question 3진법 뒤집기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15

---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - 3진법 뒤집기

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 3진법 뒤집기

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

##### I/O Examples

| n    | Result |
| :----: | :------: |
| 45   | 7      |
| 125  | 229    |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n) {
​    var answer = n.toString(3);
​    var newTemp = answer.split("").reverse().join("");
​    return answer = parseInt(newTemp, 3);
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)