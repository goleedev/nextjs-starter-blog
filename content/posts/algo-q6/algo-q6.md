---

title: Algorithm Question 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-30

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

### 👀 Question 문제설명

Write a solution that returns the sums of any two items from the given array.

Remeber that the returned array should be in an ascendin order.

<br>

### 👨‍💻 Question 답안

```javascript
function solution(numbers) {
    var answer = [];
    let newNum;
    // Check if it is
    for(let i = 0; i < numbers.length; i++) {
      for(let j = 0; j < numbers.length; j++) {
        if(i !== j) {
          newNum = numbers[i] + numbers[j];
          answer.push(newNum);
        } 
        // Remove duplicate value
        answer = Array.from(new Set(answer));
        or
        answer = [...new Set(answer)];
      }
    }
    // Ascending order
    answer.sort((a, b) => a - b)
    return answer;
}
```
---
#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)