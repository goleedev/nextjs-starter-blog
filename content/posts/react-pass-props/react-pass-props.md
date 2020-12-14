---

title: Pass Props Using History Object or Link Component in React ⌛
description: How to handle when passing props in React
category: ReactJS
date: 2020-12-01

---

![react](react.png)

## 🤦 TL; DR

- With History Object
  
  
- With Link Component

---

## With History Object

If trying to pass props using history object, you can pass them as follows:

```js
const history = useHistory();

history.push({
  pathname: '/search',
  search: `?query=${searchInput}`,
  state: { data: searchInput }
}
```

---

## With Link Component

If trying to pass props using history object, you can pass them as follows:

```js
<Link to={{
  pathname: '/template',
  search: '?query=abc',
  state: { detail: response.data }
  }}>
	My Link 
</Link>
```

---

### 🔗 Reference

Source 1 - [How to pass params with history.push/Link/Redirect in react-router v4?](https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-link-redirect-in-react-router-v4)
