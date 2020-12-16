---

title: Add Favicon on Next.js App 😲
description: What to do to have favicon on your nextjs app
category: TIL
date: 2020-11-30

---

![nextjs](nextjs.jpg)

## 🤦 TL; DR

- Favicon
  
- How to Add on NextJS

---

## Favicon

A **favicon** is a graphic image (icon) associated with a particular Web page and/or Web site. 

Many recent user agents (such as graphical browsers and newsreaders) display them 

as a **visual reminder** of the Web site identity in the address bar or in tabs. \[See source 1]



---

### How to Add on NextJS

- Create `/static` Folder in Project Root

- Add **Favicon File** of Your Choice Inside

- Add Favicon Link to **Head**

  ```html
  <link rel="shortcut icon" href="../static/favicon.ico" />
  ```

---

### 🔗 Reference

Source 1 - [How to Add a Favicon to your Site - QA @ W3C](https://www.w3.org/2005/10/howto-favicon)