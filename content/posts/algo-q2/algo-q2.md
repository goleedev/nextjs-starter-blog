---

title: Algorithm Question 소수 찾기 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-27

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 2 문제설명 - 소수 찾기
  
- Question 2 답안 

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### Question 2 문제설명 - 소수 찾기

Write a solution to find how many prime numbers are in between 1 to the given number, n.

Remember that n is an integer that is greater and equal to 2 and smaller and equal to 10,000,000. 

1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

##### I/O Examples

| n    | result |
| ---- | ------ |
| 10   | 4      |
| 5    | 3      |

---

### Question 2 답안

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
// Run Time Over
```

```js
// Code from others
function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  for (let i = 1; i * i < n; i++) {
      if(arr[i]) {
          let num = arr[i];
          for (let j = num * num; j <= n; j+= num) {
              arr[j - 1] = 0;
          }            
      }
  }
  let answer = arr.filter((number) => number);
  answer.shift();
  return answer.length;
}
```


---

### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)