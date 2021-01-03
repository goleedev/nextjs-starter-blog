---
title: Algorithm Question 문자열 내 p와 y의 개수 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-15
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 문자열 내 p와 y의 개수
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 문자열 내 p와 y의 개수

대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

##### I/O Examples

| s         | Answer |
| :---------: | :------: |
| "pPoooyY" | True   |
| "Pyy"     | False  |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(s) {
  var answer = true;
  var pArr = [];
  var yArr = [];
  var checkString = s.toLowerCase().split("");
  if(checkString.includes("p") || checkString.includes("y")) {
​    for (let i = 0; i < checkString.length; i++) {
​        if(checkString[i] === "p") {
​           pArr.push(checkString[i]);
​        } else if (checkString[i] === "y") {
​           yArr.push(checkString[i]);
​        }
​     }
​     if(pArr.length === yArr.length) {
​       return answer;
​     } else {
​       return answer = false;
​     }
  } else {
​    return answer;
  }
}
```
<br>
#### Source from Others

```js
function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
```
<br>
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)