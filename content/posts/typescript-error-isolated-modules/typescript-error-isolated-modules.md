---
title: Getting Error: '--isolatedModules' in React with TypeScript
category: TypeScript
description: How to get rid of isloated modules error
date: 2021-01-03
---

## 🤦 TL; DR

- How to Remove Error '--isolatedModules'

---

# How to Remove Error '--isolatedModules'

Simply add the below line on the very first line of index.ts(x)

```js
/// <reference types="react-scripts" />
```
<br>