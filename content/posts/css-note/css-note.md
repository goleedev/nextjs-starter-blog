---

title: CSS Styles Note (Updated on Nov 2020) 📓
description: Stack CSS info I need
category: TIL
date: 2020-11-25

---

![css](css.png)


## 🤦 TL; DR

- White-space

- How To Center

- Flex-direction - Column

---


### White-space

Use when break lines not working on Markdown or need to break lines every time press the enter.

```bash
.some_class {
	white-space: pre-line;
}
```

---

### How To Center

```bash
.some_class {
	text-align: center;
	or
	margin: 0 auto;
}
or
.some_class {
	display: flex;
	align-items: center;
	justify-cotent: center;
}
or
.some_class {
  text-align: center;
}
or
.some_class {
  display: flex;
  justify-content: center;
}
```

---

### Flex-direction (Column)

```bash
.some_class {
	display: flex;
	flex-direction: column;
}
```

---

### li::marker

Use when you need to change the color of list items.

```bash
li::marker {
	color: #color;
}

// marker for indented list item
ul > li > ul > li::marker {
	color: #color !important;
}
```

---

### Input - Blue Border

```bash
input:focus:after {
    border-color: transparent;
    webkit-box-shadow: none;
    box-shadow: none;
}
&&
input:focus {
    outline: none !important;
}
```

---

### 🔗 Reference

[Centering](https://poiemaweb.com/css3-centering)