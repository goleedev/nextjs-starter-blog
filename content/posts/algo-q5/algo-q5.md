---

title: Algorithm Question JadenCase 문자열 만들기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-30

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - JadenCase 문자열 만들기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### 👀 Question 문제설명 - JadenCase 문자열 만들기

Write a solution to return a **JadenCase string**.

Remember that the following strings from the capitalized letter should be in lower case.

##### I/O Examples

| s                       | Result                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(s) {
    var answer = '';
    var arr = [];
  
    arr=s.split(' ');
    answer = arr.map(str=> (str === '') ? '' : str.toLowerCase())
      .map(str=> (str === '') ? '' : str.replace(str[0], str[0].toUpperCase()))
      .join(' ');
    return answer;
}
```
---

#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)