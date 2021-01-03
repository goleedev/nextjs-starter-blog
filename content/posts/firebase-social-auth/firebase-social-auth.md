---
title: Firebase 소셜 사용자 인증 활성화 하는 법 🐦
category: TypeScript
description: How to use auth in Firebase
date: 2021-01-03
---

## 🤦 TL; DR

- FIrebase란?
- Firebase Auth 장점
- Firebase 소셜 사용자 인증 활성화 하는 법

---

## FIrebase란?

Firebase는 BaaS(Backend as a Service)로 서버 측 코드를 작성하지 않고도 클라우드와 연동을 통해 모바일 응용 프로그램을 개발할 수 있는 환경을 제공한다.

<br>

Firebase는 다양한 기능을 제공하는데, 실시간 데이터베이스, 사용자 인증, 클라우드, 애널리스틱스 등이 있다.

---

## Firebase Auth 장점

![firebase-auth](firebase-auth.png)
<br>
**Firebase의 인증 시스템**은 다양한 로그인 제공업체를 간단하게 사용할 수 있다는 장점이 있다. 이메일/비밀번호를 통한 직접 가입부터 구글, 깃헙 등에 가입되어 있는 아이디를 가지고도 사용자가 좀 더 손쉽게 가입을 할 수 있게 해준다.

---

## Firebase 소셜 사용자 인증 활성화 하는 법

### - Google auth

![google-auth](google-auth.png)

Google 인증은 간단하게 사용 설정 스위치를 켜주고, 프로젝트 지원 이메일을 선택하는 것으로 사용이 가능하다.


### - GitHub auth
![github-auth](github-auth.png)
GitHub 인증을 사용하고 싶을 때에는 사용 설정 스위치를 켜준 다음, GitHub 사이트로 가서 설정을 해주어야 한다.
<br>

![github-auth-1](github-auth-1.png)
**Settings > Developer Settings**를 누른 다음 **OAuth Apps**를 눌러주면 위와 같이 OAuth App을 등록할 수 있게 된다. 등록을 위해 **New OAuth App**을 클릭한다.
<br>

![github-auth-2](github-auth-2.png)

이처럼 앱 이름, url (Firebase SDK snippet에서 입력한 authDomain), 그리고 callback url(GitHub 인증 사용 설정에서 복사)를 옮겨주면 간단하게 등록 및 사용이 가능하다.

<br>