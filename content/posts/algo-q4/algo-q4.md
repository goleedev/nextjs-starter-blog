---

title: Algorithm Question 시저 암호 🧬
category: Algorithms
description: Getting ready for algorithmic coding tests!
date: 2020-11-29

---

## 🤦 TL; DR

- Data Structures & Algorithms
  
- Question 문제설명 - 시저 암호
  
- Question 답안

---

## 🗄️ Data Structures & Algorithms

A computer program is **a collection of instructions to perform a specific task**. For this, a computer program may need to store data, retrieve data, and perform computations on the data.

A **data structure** is a named location that can be used to **store and organize data**. 

And, an **algorithm** is a collection of **steps to solve a particular problem**. \[See Source 1]

---

### 👀 Question 문제설명 - 시저암호

Write a solution to return an alternated alphabet distant 'n' words from the original.

Remember that it circulates as the second example.

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

##### I/O Examples

| s       | n    | Result  |
| :-------: | :----: | :-------: |
| "AB"    | 1    | "BC"    |
| "z"     | 1    | "a"     |
| "a B z" | 4    | "e F d" |

<br>

### 👨‍💻 Question 답안

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
<br>

#### Source from Others
```js
unction solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
```
---
#### 🔗 Reference
Source 1 - [Learn DS & Algorithms](https://www.programiz.com/dsa)