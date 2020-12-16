---

title: Style NextJS App w/ Styled JSX 💅
description: What to do to style your nextjs app
category: TIL
date: 2020-11-30

---

![nextjs](nextjs.jpg)

## 🤦 TL; DR

- Styled jsx

- Basic Syntax

---

## Styled-jsx

It is a **CSS-in-JS library** that allows you to write encapsulated and scoped CSS to style your components. \[See source 1] 

The styles you introduce for one component **won't affect other components**, allowing you to add, change and delete styles **without worrying about unintended side effects**. \[See source 2]

---

### Basic Syntax - Style Components

With the following basic syntax, you can style components just as the way you do with CSS.

```jsx
<style jsx>{`
	.some_class {
		...
	}
`}</style>
```

---

### Basic Syntax - Style Globally

Basically, styled-jsx is scoped to style the elements but you can still style them globally.

```jsx
<style jsx>{`
	.some_class {
		...
	}
`}</style>
```

---

### 🔗 References

Source 1 - [styled-jsx](https://github.com/vercel/styled-jsx)

Source 2 - [Styling Next.js with Styled JSX](https://nextjs.org/blog/styling-next-with-styled-jsx)