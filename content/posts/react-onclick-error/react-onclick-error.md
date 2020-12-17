---

title: React onClick Function Error + Too Many Re-renders 🔁
description: When getting too many re-renders error
category: React
date: 2020-11-30

---

![react](react.png)

## 🤦 TL; DR

- React - Handling Events
  
- Too Many Re-renders Error

---

## React - Handling Events

When using React, you generally don’t need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered. \[See Source 1]

---

### Too Many Re-renders Error

Too many re-renders error may occur when **onClick prop has a problem**.

```js
const [value, setValue] = useState(0);

<button onClick={setValue(value +1)}>+</button>
```

The example above lead to the error because everything between the **curly braces get evaluated immediately**, which means it is **called in every render loop.** \[See Source 2]

The problem needs to be fixed by **wrapping the function with an arrow function** as follows:

```js
const [value, setValue] = useState(0);

<button onClick={() => setValue(value +1)}>+</button>
```

---

### 🔗 References

Source 1 - [Handling Events](https://en.reactjs.org/docs/handling-events.html)

Source 2 - [“Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.”](https://stackoverflow.com/questions/59304283/error-too-many-re-renders-react-limits-the-number-of-renders-to-prevent-an-in)