---

title: Algorithm Question 2016년 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-12-14

---

## 🤦 TL; DR

- Data Structures & Algorithms

- Question 9 문제설명 - 2016년

- Question 9 답안

---

## Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

자료구조는 '**데이터의 표현 및 저장 방법**'을 뜻하고, 알고리즘은 이러한 데이터를 대상으로 하는 '**문제의 해결 방법**'을 뜻한다.

---

### Question 9 문제설명 - 2016년

2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 `SUN,MON,TUE,WED,THU,FRI,SAT`

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

##### I/O Examples

| a    | b    | result |
| ---- | ---- | ------ |
| 5    | 24   | "TUE"  |

---

### Question 9 답안

```javascript
function solution(a, b) {
​    var answer = '';
​    let  day=["SUN","MON","TUE","WED","THU","FRI","SAT"]
​    const date = new Date(`2016,${a},${b}`);
​    return answer = (day[date.getDay()]);
}
```

---

#### 🔗 Reference

Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)