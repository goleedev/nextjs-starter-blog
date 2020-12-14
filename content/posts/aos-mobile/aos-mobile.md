---

title: How to Turn Off AOS on Mobile 📴
description: Sometimes we just don't want animations
category: TIL
date: 2020-11-29

---

![mobile](mobile.jpg)

## 🤦 TL; DR

- AOS
  
- How to Turn Off

---

## [AOS](https://michalsnik.github.io/aos/)

AOS, Animate On Scroll Library, is a CSS3 driven scroll animation library.

AOS allows you to animate elements as you scroll down, and up. If you scroll back to top, elements will animate to it's previous state and are ready to animate again if you scroll down.

---

### How to Turn Off (on mobile)

Here's how:

```javascript
AOS.init({disable: 'mobile'});
```


You can specify the disable values including, 'phone', 'tablet', and so on.

For more options, check [here](https://github.com/michalsnik/aos).

---

### 🔗 Reference

[AOS](https://michalsnik.github.io/aos/)