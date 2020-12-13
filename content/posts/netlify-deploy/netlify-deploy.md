---
title: Netlify로 정적 웹사이트 배포하기 👷
description: How to deploy static web apps on Netlify
category: TIL
date: 2020-08-20
---

![netlify](netlify.jpg)

## 🤦 TL; DR

**Netlify로 Deploy하기** 

​	1) Manual Upload 

​	2) Git Provider Deploy 

​	3) Netlify CLI Deploy

---

## Netlify로 Deploy하기 👷

### [Netlify](https://app.netlify.com/) 란?

Netlify는 웹 기반 응용 프로그램 및 정적 웹 사이트를위한 호스팅 및 서버리스 백엔드 서비스를 제공하는 샌프란시스코 기반 클라우드 컴퓨팅 회사입니다.

---

### Manual Upload

![manual](manual.png)

Netlify에 가입 후 배포하고 싶은 폴더 및 파일을 사이트 하단에 위치한 **Drag & Drop 섹션**에 직접 업로드하면 된다.

---

### Git Provider Deploy

1) **New site from Git** 버튼을 누른다.

![provider1](provider1.png)

2) Git provider인 **Github/Git Lab/Bitbucket** 중 하나를 선택한다. 

![provider2](provider2.png)

3) 배포하고 싶은 **Repo**를 선택한다.

4) **Build 옵션**이 존재한다면 입력한 후 배포한다.

---

### Netlify CLI Deploy

1) Terminal을 켜고 **Netlify CLI를 설치**한다

```bash
# Install netlify CLI globally
npm install netlify-cli -g
### OR ### 
yarn global add netlify-cli
```

2) Netlify에 **로그인**한다

```bash
# login to your netlify account
netlify login
```

3) Netlify 프로젝트를 생성 or 존재하는 프로젝트에 연결한 후 **Deploy**한다

```bash
# deploy to live site
netlify deploy -p
### OR ### 
netlify deploy --prod
```

---

### 🔗 Reference

- [**Deploy in seconds with Netlify CLI**](https://www.netlify.com/blog/2019/05/28/deploy-in-seconds-with-netlify-cli/) 

