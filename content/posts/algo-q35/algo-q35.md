---
title: Algorithm Question 같은 숫자는 싫어 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 같은 숫자는 싫어
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 같은 숫자는 싫어

배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

- arr = \[1, 1, 3, 3, 0, 1, 1] 이면 \[1, 3, 0, 1] 을 return 합니다.
- arr = \[4, 4, 4, 3, 3] 이면 \[4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

##### I/O Examples

| arr | return |
| :---------------: | :---------: |
| \[1,1,3,3,0,1,1] | \[1,3,0,1] |
| \[4,4,4,3,3]     | \[4,3]     |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(arr) {
  var answer = [];
  var now = arr[0];
  answer.push(now);
  for (let i = 1; i < arr.length; i++) {
​    if (now !== arr[i]) {
​      now = arr[i];
​      answer.push(now);
​    }
  }
  return answer;
}
```
<br>
#### Source from Others
```js
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)