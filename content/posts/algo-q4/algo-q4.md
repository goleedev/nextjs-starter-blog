---

title: Algorithm Question 4 🧬
category: TIL
description: Getting ready for algorithm test! | Question 4
date: 2020-11-29

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 4 Instruction
  
- Question 4 Answer

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 4 Instruction

Write a solution to return an alternated alphabet distant 'n' words from the original.

Remember that it circulates as the second example.

##### I/O Examples

| s       | n    | Result  |
| ------- | ---- | ------- |
| "AB"    | 1    | "BC"    |
| "z"     | 1    | "a"     |
| "a B z" | 4    | "e F d" |

---

### Question 4 Answer

```javascript
function solution(s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) { 
        if ( s[i] === ' ' ) 
            answer += ' ' 
        else 
            answer += String.fromCharCode( 
                    (s.charCodeAt(i) > 90)
                    ? (s.charCodeAt(i) + n - 97) % 26 + 97 
                    : (s.charCodeAt(i) + n - 65) % 26 + 65 )
    } 
    return answer;
}
```

---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)