---
title: Algorithm Question 서울에서 김서방 찾기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 서울에서 김서방 찾기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 서울에서 김서방 찾기

String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

##### I/O Examples

| seoul           | return              |
| --------------- | ------------------- |
| \["Jane", "Kim"] | "김서방은 1에 있다" |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(seoul) {
​    var answer = '';
​    for(let i = 0; i < seoul.length; i++) {
​      if(seoul[i] === "Kim") {
​        answer = i;
​      }
​    }
​    return `김서방은 ${answer}에 있다`;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)