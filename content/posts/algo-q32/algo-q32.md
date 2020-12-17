---
title: Algorithm Question 이상한 문자 만들기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 이상한 문자 만들기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 이상한 문자 만들기

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

##### I/O Examples

| s                 | return            |
| :----------------: | :----------------: |
| "try hello world" | "TrY HeLlO WoRlD" |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(s) {
  var answerArr = [];
  var answer = s.split(" ");
  var answerWord;
  for (let i = 0; i < answer.length; i++) {
​    answerWord = answer[i].split("");
​    for (let j = 0; j < answerWord.length; j++) {
​      j % 2 === 0 ? answerWord[j] = answerWord[j].toUpperCase() : answerWord[j] = answerWord[j].toLowerCase()
​      answerArr.push(answerWord[j]);
​    }
​    answerArr.push(" ");
  }
  answerArr.pop();
  return answerArr.join("");
}
```
<br>
#### Source from Others

```js
function toWeirdCase(s){
  return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)