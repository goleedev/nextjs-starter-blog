---

title: GoDaddy Custom Domain w/ GitHub Pages ⛓️
description: Your custom domain connecting with gh pages
category: TIL
date: 2020-11-29

---

![custom-domain](custom-domain.png)

## 🤦 TL; DR

- Custom Domain

- Step 1 Buy a Domain

- Step 2 Deploy w/ GitHub Pages

- Step 3 Add a Custom Domain

- Step 4 Add a CNAME

- Step 5 Manage DNS Settings

- Step 6 Check a Domain

---

## Custom Domain

A custom domain is a **unique branded name** that identifies a website.
It is also known as **vanity URLs**, appear in the address bar at the top of every browser.

---

### Step 1 Buy a Domain

I bought a domain on **GoDaddy**, but you can use any domain providers of your choice.

---

### Step 2 Deploy w/ GitHub Pages (React App)

- Add **following lines** on package.json

  ```javascript
  "scripts": {
  	...
  -> "predeploy": "npm run build",
  ->	"deploy": "gh-pages -d build"
  },
  ...
  },
  ->  "homepage": "https://github_username.github.io/repo_name"
  }
  ```

- Install **GitHub Pages** on Terminal

  ```bash
  npm i gh-pages
  ```

- Run `npm run deploy` to Deploy

- Wait and Check the **Deployed Website** on `https://github_username.github.io/repo_name`

---

### Step 3 Add a Custom Domain

​	Go to **Repo Settings** and Add a **Custom Domain**

​	**⚠️ Don't forget to change the home page URL on package.json**

---

### Step 4 Add a CNAME

![cname](cname.png)

​	Create a CNAME and add the custom domain inside.

---

### Step 5 Manage DNS Settings

- Go to Your **Domain Provider** and Click to Change **DNS Settings**

- Add **DNS records** as follows:

  | TYPE  | NAME | VALUE                     | TTL   |
  | ----- | ---- | ------------------------- | ----- |
  | A     | @    | 185.199.108.153           | 1/2hr |
  | A     | @    | 185.199.109.153           | 1/2hr |
  | A     | @    | 185.199.110.153           | 1/2hr |
  | A     | @    | 185.199.111.153           | 1/2hr |
  | CNAME | www  | github_username.github.io | 1/2hr |

---

### Step 6 Check a Domain

Check if `Enforce HTTPS` button is clicked on repo settings

![custom](custom.png)


---

### 🔗 References
[Understand how custom domains work](https://support.nationbuilder.com/en/articles/2341059-understand-how-custom-domains-work)
[Linking A Custom Domain To Github Pages](https://richpauloo.github.io/2019-11-17-Linking-a-Custom-Domain-to-Github-Pages/)