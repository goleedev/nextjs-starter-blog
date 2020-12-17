---
title: Algorithm Question 완주하지 못한 선수 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-02
---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - 완주하지 못한 선수

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### 👀 Question 문제설명 - 완주하지 못한 선수

Write a solution to return a **JadenCase string**.

Remember that the following strings from the capitalized letter should be in lower case.

수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

##### I/O Examples

| Participant                                       | Completion                               | Return   |
| :-------------------------------------------------: | :----------------------------------------: | :--------: |
| \["leo", "kiki", "eden"]                           | \["eden", "kiki"]                         | "leo"    |
| \["marina", "josipa", "nikola", "vinko", "filipa"] | \["josipa", "filipa", "marina", "nikola"] | "vinko"  |
| \["mislav", "stanko", "mislav", "ana"]             | \["stanko", "ana", "mislav"]              | "mislav" |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(participant, completion) {
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