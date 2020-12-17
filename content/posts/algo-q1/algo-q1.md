---

title: Algorithm Question 1 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-26

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### 👀 Question 1 문제설명

Write a solution to return an array of dividing by divisor value and leaves no remainders.

Remember that 1) the returned array should be in an **ascending order** and 2) it should **return -1** if there is no element in the array.

##### I/O Examples

| arr           | divisor | return        |
| :-------------: | :-------: | :-------------: |
| \[5, 9, 7, 10] | 5       | \[5, 10]       |
| \[2, 36, 1, 3] | 1       | \[1, 2, 3, 36] |
| \[3,2,6]       | 10      | \[-1]          |

<br>

### 👨‍💻 Question 1 답안

```javascript
function solution(arr, divisor) {
    var answer = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor == 0 ) {
            answer.push(arr[i]);
        }
    }
    if(answer.length == 0) {
        answer.push(-1);
    }
    return answer.sort((a, b) => a - b);
}
```
---
### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)