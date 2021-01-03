---
title: Algorithm Question 나누어 떨어지는 숫자 배열 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - 나누어 떨어지는 숫자 배열

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 나누어 떨어지는 숫자 배열

자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

##### I/O Examples

| Arr            | divisor | return        |
| :--------------: | :-------: | :-------------: |
| \[5, 9, 7, 10]  | 5       | \[5, 10]       |
| \[2, 36, 1, 3]] | 1       | \[1, 2, 3, 36] |
| \[3,2,6]        | -1      | \[-1]          |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
      if((arr[i] % divisor) === 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length === 0) {
      answer.push(-1);
    }
    return answer.sort((a, b) => a - b)
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)