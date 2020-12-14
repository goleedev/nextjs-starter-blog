---

title: Algorithm Question 6 🧬
category: TIL
description: Getting ready for algorithm test! | Question 6
date: 2020-11-31

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 6 Instruction
  
- Question 6 Answer

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 6 Instruction

Write a solution that returns the sums of any two items from the given array.

Remeber that the returned array should be in an ascendin order.

---

### Question 6 Answer

---
title: Coding Post
description: Coding is such a blissful activity.
date: 2020-04-19T11:00:00.000Z

---

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