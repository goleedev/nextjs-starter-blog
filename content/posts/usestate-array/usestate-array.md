---

title: How to Add to an Array in React State using Hooks ➕
description: Handling arrays using React hooks
category: React
date: 2020-12-03

---

![react](react.png)

## 🤦 TL; DR

- useState()

---

## [useState](https://en.reactjs.org/docs/hooks-state.html)

According to React documents, a Hook is a special function that lets you “hook into” React features. 

For example, `useState` is a Hook that lets you **add React state to function components**.

Simply put, it is used when you **add or handle the state** to a function component.

---

### Set A State Array

```js
const [theArray, setTheArray] = useState(initialArray);
```


### Add A New Element

```js
setTheArray(oldArray => [...oldArray, newElement]);
or
setTheArray([...theArray, newElement]);
```


---

### 🔗 References

[Push method in React Hooks (useState)?](https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate)

[Using the State Hook](https://en.reactjs.org/docs/hooks-state.html)