---

title: Sort and Limit Data on Firestore 🎇
description: Ways to handle data on firestore
category: TIL
date: 2020-11-30

---

![react](react.png)

## 🤦 TL; DR

- Firestore
  
- Sorting & Limiting

---

## Firestore

Use our flexible, scalable NoSQL cloud database to store and sync data for client- and server-side development.

---

### Sorting & Limiting

You can sort by using `.orderBy()` and limit by using `limit()`

```javascript
const users = yield call(
  rsf.firestore.getCollection,
  firestore.collection('users').orderBy('age').limit(10)
)
```

---

### 🔗 References

See Source 1 -  [Cloud Firestore](https://firebase.google.com/docs/firestore/quickstart?hl=en)

See Source 2 - [Sorting and filtering](https://redux-saga-firebase.js.org/guides/sorting-filtering)