---

title: Stop Memory Leaks in React useEffect Hook 🪝
description: Getting memory leak warning? Check this out.
category: React
date: 2020-11-30

---

![react](react.png)

## 🤦 TL; DR

- React useEffect Hooks
  
  
- Stop Memory Leaks

---

## React useEffect Hooks

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

By using this Hook, you tell React that your component **needs to do something after render**. 

React will **remember** the function you **passed** (we’ll refer to it as our “effect”), 

and **call it later after performing the DOM updates**. \[See Source 1]

---

### Stop Memory Leaks

Use [useStateIfMounted](https://www.npmjs.com/package/use-state-if-mounted) hook, that will only update the state if your component is mounted. \[See Source 2]

```js
function OtherExample() {
  const [text, setText] = useStateIfMounted("waiting...");

  React.useEffect(() => {
    simulateSlowNetworkRequest().then(() => {
      setText("done!"); // no more error
    });
  }, [setText]);

  return <h2>{text}</h2>;
}
```

---

### 🔗 References

Source 1 - [Using the Effect Hook](https://en.reactjs.org/docs/hooks-effect.html)

Source 2 - [An elegant solution for memory leaks in React](https://dev.to/nans/an-elegant-solution-for-memory-leaks-in-react-1hol)