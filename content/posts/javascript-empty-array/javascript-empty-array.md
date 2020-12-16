---

title: How to Empty an Array in JavaScript 📭
description: When you need to clear out the array...
category: JS
date: 2020-11-29

---

![array](array.png)

## 🤦 TL; DR

- Array
  
- How to Empty

---

## Array

An array is a special variable, which can hold **more than one value** at a time.

---

### How to Empty

#### #1 Create a New Empty Array

```javascript
const A = [a, b];
A = [];
```

---

#### #2 Empty Without Creating a New Array

```javascript
A.length = 0;
```

---

#### #3 Removing All Items

```javascript
while (A.length > 0) {
    A.pop();
}
```

---

### 🔗 Reference

[How do I empty an array in JavaScript?](https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript)
