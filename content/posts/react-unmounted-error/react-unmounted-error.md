---

title: Can't perform a React state update on an unmounted component Error ⛰️
description: Unmounted error in React? Let's fix it
category: ReactJS
date: 2020-12-01

---

![react](react.png)

## 🤦 TL; DR

- React useEffect Hooks
  
  
- Error - Can't perform a React state update on an unmounted component 

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

### Can't perform a React state update on an unmounted component 

To put it simple, add **clean function** on useEffect hooks.

---

### 🔗 Reference

Source 1 - [Using the Effect Hook](https://en.reactjs.org/docs/hooks-effect.html)https://en.reactjs.org/docs/handling-events.html)
