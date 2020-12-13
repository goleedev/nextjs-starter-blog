---

title: How to Convert Array into String in JavaScript ✨
description: Need to know the way to covert!
category: TIL
date: 2020-11-27

---

![array](array.png)

## 🤦 TL; DR

- Array into String

---

### Array into String

### 1) Use **toString()** method

```javascript
const arr = [1, 2, 'a'];

console.log(arr.toString());
// output: "1, 2, a"
```

---

### 2) Use join() method

It is more **flexible** in terms of conversion. You can put everything in between the elements by using it.

```javascript
const arr = [1, 2, 'a'];

console.log(arr.join(''));
// output: "12a"
or
console.log(arr.join(' '));
// output: "1 2 a"
or
console.log(arr.join('-'));
// output: "1-2-a"
```