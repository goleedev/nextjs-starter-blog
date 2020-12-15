---

title: Algorithm Question 3 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-28

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 3 Instruction
  
- Question 3 Answer

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 3 Instruction

Write a solution to return an array that **removes the smallest item**.

Remember to return -1 if there is no element left in the array after removing.

##### I/O Examples

| Arr       | Return  |
| --------- | ------- |
| \[4,3,2,1] | \[4,3,2] |
| \[10]      | \[-1]    |

---

### Question 3 Answer

```javascript
function solution(arr) {
    var answer = [];
    var arrSize = arr.length;
    var minNum = 0;
    var newArr = arr.concat();

    newArr.sort((a, b) => b - a);
    minNum = newArr[arrSize - 1];
  
    for(let i = 0; i < arrSize; i++){
      if(arr[i] !== minNum){
        answer.push(arr[i]);
      }
    }
    if(answer.length === 0){
      answer.push(-1);
    }
    return answer;
}

```

---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)