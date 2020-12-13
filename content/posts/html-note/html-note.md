---

title: HTML Note (Updated on Nov 2020) 📔
description: Stack HTML info I need
category: TIL
date: 2020-11-29

---

![html](html.png)

## 🤦 TL; DR


- Form Validation - Input Pattern Attribute

---

### Form Validation - Input Pattern Attribute

HTML form validation by input pattern attribute

```html
// password
<form>
  <label for="pwd">Password:</label>
  <input 
  type="password" 
  id="pwd" 
  name="pwd"
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one number and 
  one uppercase and lowercase letter, 
  and at least 8 or more characters"
  >
  <input type="submit">
</form>

// email
<form action="/">
  <label for="email">Email:</label>
  <input 
  type="email" 
  id="email" 
  name="email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  >
  <input type="submit">
</form>

// phone
<form action="/">
  <label for="phone">Phone:</label>
  <input 
  name="phone" 
  id="phone" 
  type="tel" 
  pattern="[0-9]{3}[-]{0,1}[0-9]{4}[-]{0,1}[0-9]{4}"
  >
  <input type="submit">
</form>
```