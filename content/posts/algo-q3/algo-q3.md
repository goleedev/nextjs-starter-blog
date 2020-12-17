---

title: Algorithm Question 제일 작은 수 제거하기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-28

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 제일 작은 수 제거하기
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### 👀 Question 문제설명 - 제일 작은 수 제거하기

Write a solution to return an array that **removes the smallest item**.

Remember to return -1 if there is no element left in the array after removing.

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 \[4,3,2,1]인 경우는 \[4,3,2]를 리턴 하고, \[10]면 \[-1]을 리턴 합니다.

##### I/O Examples

| Arr       | Return  |
| :---------: | :-------: |
| \[4,3,2,1] | \[4,3,2] |
| \[10]      | \[-1]    |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(arr) {
    var answer = [];
    var minNum = 0;
    var newArr = arr.concat().sort((a, b) => b - a);
    minNum = newArr[arr.length - 1];
    for(let i = 0; i <  arr.length; i++){
      if(arr[i] !== minNum){
        answer.push(arr[i]);
      }
    }
    if(answer.length === 0){
      answer.push(-1);
    }
    return answer;
}

<br>

#### Source from Others
```js
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
```
---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)