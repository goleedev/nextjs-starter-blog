---
title: Algorithm Question K번째수 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-14
---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 문제설명 - K번째수

- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - K번째수

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 \[1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 \[5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 \[2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, \[i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

##### I/O Examples

| array                 | commands                          | return    |
| :---------------------: | :---------------------------------: | :---------: |
| \[1, 5, 2, 6, 3, 7, 4] | \[\[2, 5, 3], \[4, 4, 1], \[1, 7, 3]] | \[5, 6, 3] |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(array, commands) {
​    var answer = [];
​    var start, end, num;
​    for(let i = 0; i < commands.length; i++) {
​      end = commands[i][1];
​      num = commands[i][2];
​      let temp = array.slice(start-1, end).sort((*a*, *b*) => a - b)
​      answer.push(temp[num-1]);
​    }
​    return answer;
  }
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)