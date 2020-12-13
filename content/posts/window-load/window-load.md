---

title: Window Load Event 🖨️
description: Handling window load event
category: TIL
date: 2020-12-02

---

![loading](loading.jpg)

## 🤦 TL; DR

- Window Load Event
  

---

## Window Load Event

The **`load`** event is fired when the whole page has loaded, including all resources.

It is used to easily check if the whole page is loaded or not.

```js
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
or
window.onload = (event) => {
  console.log('page is fully loaded');
};
```

---

### 🔗 Reference

[Window: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

