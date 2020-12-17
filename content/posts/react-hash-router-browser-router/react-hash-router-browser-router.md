---

title: Differences between HashRouter & BrowserRouter ⚖️
description: What makes them different?
category: React
date: 2020-11-30

---

![react](react.png)

## 🤦 TL; DR

- React Router
  
- Hash VS Browser

---

## React Router

React Router is the **standard routing library for React**.

It is a collection of **navigational components** that compose declaratively with your application. \[See source 1]

---

### BrowserRouter VS HashRouter

- **BrowserRouter**

    - It uses [history API](https://developer.mozilla.org/en-US/docs/Web/API/History_API).

    - Client-side React application is able to maintain clean routes like *example.com/react/route* but needs to be backed by web server. 

- **HashRouter**

    - It uses **URL hash**, it puts no limitations on supported browsers or web server. 

    - **Server-side routing** is independent from client-side routing.

👉 Most importantly, HashRouter use cases aren't limited to SPA.

---

### Use Cases

**HashRouter** - small client side applications which doesn't need backend 

**BrowserRouter** - big production-ready applications which serve backend

---

### 🔗 References

Source 1 - [REACT ROUTER](https://reactrouter.com/)

Source 2 - [HashRouter vs BrowserRouter](https://stackoverflow.com/questions/51974369/hashrouter-vs-browserrouter)

