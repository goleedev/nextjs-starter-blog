---
title: Algorithm Question 최대공약수와 최소공배수 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-17
---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 최대공약수와 최소공배수
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### 👀 Question 문제설명 - 최대공약수와 최소공배수

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

##### I/O Examples

| n    | m    | return  |
| :----: | :----: | :-----: |
| 3    | 12   | \[3, 12] |
| 2    | 5    | \[1, 10] |

<br>

### 👨‍💻 Question 답안

```javascript
function solution(n, m) {
  function gcd(a, b) {
​    while (b > 0) {
​      let temp = b;
​      b = a % b;
​      a = temp;
​    }
​    return a; 
  }
  function lcm(c, d) {
​    return (c * d) / gcd(c, d);
  }
  return [gcd(n,m), lcm(n, m)];
}
```
<br>
#### Source from Others

```js
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)