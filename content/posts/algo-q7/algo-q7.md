---
title: Algorithm Question 7 🧬
category: DS & Algorithms
description: Getting ready for algorithm test! | Question 7
date: 2020-12-02
---

## 🤦 TL; DR



- Data Structures & Algorithms

- Question 7 Instruction

- Question 7 Answer



---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 7 Instruction

Write a solution to return a **JadenCase string**.

Remember that the following strings from the capitalized letter should be in lower case.

##### I/O Examples

| Participant                                       | Completion                               | Return   |
| ------------------------------------------------- | ---------------------------------------- | -------- |
| ["leo", "kiki", "eden"]                           | ["eden", "kiki"]                         | "leo"    |
| ["marina", "josipa", "nikola", "vinko", "filipa"] | ["josipa", "filipa", "marina", "nikola"] | "vinko"  |
| ["mislav", "stanko", "mislav", "ana"]             | ["stanko", "ana", "mislav"]              | "mislav" |

---

### Question 7 Answer

```javascript
function solution(participant, completion) {
	//ㄴ
  participant.sort();
  completion.sort();
    
  for(let i in participant) {
      if(participant[i] !== completion[i]) return participant[i];
  }
}
```

---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)