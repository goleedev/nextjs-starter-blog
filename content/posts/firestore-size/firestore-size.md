---

title: How to Count FireStore Collection Size  (for small collections) 🧮
description: Ways to check data collection size on firestore
category: TIL
date: 2020-11-27

---

![firestore](firestore.png)

## 🤦 TL; DR

- FireStore
  - FireStore Collection

- How to Count

---

## [FireStore](https://firebase.google.com/docs/firestore)

According to Firebase documents, Cloud Firestore is a **flexible, scalable database** for mobile, web, and server development from Firebase and Google Cloud Platform. 

---

### Firestore Collection
Cloud Firestore stores data in **Documents**, which are stored in **Collections**. When you add the data, it would be stored directly in them.

---

### How to Count - Small Collection

This is only for the smaller collections which take up to **100 documents**. 

If the collections are getting more documents than 100, check out the reference for the bigger collections to count their size.

```javascript
db.collection('...').get().then(snap => {
   size = snap.size // will return the collection size
});
```

---

### When to Use?
I've used it for the latest project, the Ohsung Real-estate Agency web app.

I wanted to check search values with this feature -- **no search results** should return the no result component page. So, no search result page displays when the returned collection size equals **zero**. 

Also, the collection size is **not quite big** (estimated though) for a while. So, I have used the 'size' feature to count the collection size.

---

### 🔗 Reference

[Cloud Firestore collection count](https://stackoverflow.com/questions/46554091/cloud-firestore-collection-count)