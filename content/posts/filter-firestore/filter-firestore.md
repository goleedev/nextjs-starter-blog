---

title: How to Filter on Firestore 🗂️
description: Filter out queries on firestore!
category: TIL
date: 2020-11-29

---

![firestore](firestore.png)

## 🤦 TL; DR

- See How to Filter by ...

---

### See How to Filter by ...

```javascript
const dbService = firebase.firestore();

// filter by type
dbService
.collection('products')
.where("type", "==", group)
.orderBy("createdAt", "desc")

// filter by id
 dbService
 .collection('products')
 .where("type", "==", id)
 .orderBy("createdAt", "desc")
 
// filter by array
 dbService
 .collection('products')
 .where("array", 'array-contains-any', [searchInput])
 
// filter by range
 dbService.collection('products')
 .orderBy("priceRange", "desc")
 .where("priceRange", ">=", 15)
 .where("priceRange", "<", 20)
 .orderBy("createdAt", "desc")
```

---

### 🔗 Reference

[Cloud Firestore](https://firebase.google.com/docs/firestore)