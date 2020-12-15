---
title: Algorithm Question 직사각형 별찍기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-16
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
  
- Question 20문제설명 - 문자열 다루기 기본
  
  
- Question 20 답안

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### Question 20 문제설명 - 직사각형 별찍기

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

##### I/O Examples

| n    | answer                                     |
| ---- | ------------------------------------------ |
| 5 3  | \*\*\*\*\*<br />\*\*\*\*\*<br />\*\*\*\*\* |

---

### Question 20 답안

```javascript
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]);
    for (let i = 0; i < b; i++) { 
        let str = ""; 
        for(let j= 0; j< a; j++){ 
            str = str + "*" 
        } 
        console.log(str) 
    }
});
```

---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)