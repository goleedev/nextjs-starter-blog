---
title: Algorithm Question 콜라츠 추측 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 콜라츠 추측
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 콜라츠 추측

1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

1-1. 입력된 수가 짝수라면 2로 나눕니다. 
1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.

2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

##### I/O Examples

| n      | result |
| :------: | :------: |
| 6      | 8      |
| 16     | 4      |
| 626331 | -1     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(num) {
  var answer = 0;
  while (num > 1) {
​    answer++;
​    num % 2 === 0 ? num = num / 2 : num = (num * 3) + 1;
  }
  return answer > 500 ? -1 : answer;
}
```
<br>
#### Source from Others

```js
function solution(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : solution(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)