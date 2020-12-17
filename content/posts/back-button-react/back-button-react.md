---

title: How to Implement Back button in React 🔙
description: Want to go back on page?
category: React
date: 2020-11-27

---

![react](react.png)

## 🤦 TL; DR



- useHistory()
  

- window.scrollTo()

---

## Back Button

The back button has described a button that handles the click event to go to the previous page. To implement this button in react, we need to know two basic concepts. 

---

### useHistory

In most situations, we need to install react-router-dom and import useHistory in the component page as follows:

```javascript
 import { useHistory } from "react-router-dom";
```



... and it is very typical to declare a variable for useHistory as well.

```javascript
let history = useHistory();
```



Afterward add the go back function on the click event.

```javascript
const onClick = () => {
	history.goBack();
}
```



+ When you use history.go(n), it moves the pointer in the history stack by 'n' entries

---

### window.scrollTo()

Sometimes, we do need to go to the previous page but also needs to be pointed to the top. Which means, we do need to use one more thing to scroll to the very top of the page.

It is as simple as it sounds -- use scrollTo function and point it to the start.

```javascript
const onClick = () => {
	history.goBack();
	window.scrollTo(0,0);
}
```



Voila! Now we don't have to manually scroll to the top after clicking the back button.