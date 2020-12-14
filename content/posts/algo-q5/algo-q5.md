---

title: Algorithm Question 5 🧬
category: TIL
description: Getting ready for algorithm test! | Question 5
date: 2020-11-30

---

## 🤦 TL; DR



- Data Structures & Algorithms
  
- Question 5 Instruction
  
- Question 5 Answer


---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 5 Instruction

Write a solution to return a **JadenCase string**.

Remember that the following strings from the capitalized letter should be in lower case.

##### I/O Examples

| s                       | Result                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

---

### Question 5 Answer

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