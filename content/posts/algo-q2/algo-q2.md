---

title: Algorithm Question 2 🧬
category: TIL
description: Getting ready for algorithm test! | Question 2
date: 2020-11-27

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 2 Instruction
  
- Question 2 Answer

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 2 Instruction

Write a solution to find how many prime numbers are in between 1 to the given number, n.

Remember that n is an integer that is greater and equal to 2 and smaller and equal to 10,000,000. 

##### I/O Examples

| n    | result |
| ---- | ------ |
| 10   | 4      |
| 5    | 3      |

---

### Question 2 Answer

```javascript
function solution(n) {
  const answer = [];
  for(let i = 2; i <= n; i++) {
    let isPrime = true;
    for(let j = 2; j < i; j++) {
      if( i % j === 0) {
          isPrime = false;
      }
    }
    if(isPrime) {
      answer.push(i);
    }
  }
  return answer.length;
}
```

---

### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)