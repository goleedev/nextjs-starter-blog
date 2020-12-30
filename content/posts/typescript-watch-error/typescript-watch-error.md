---
title: TypeScript 환경 설정 (tsc-watch) Error
category: TypeScript
description: When you get an error at a specific module on TS, try this.
date: 2020-12-30
---

## 🤦 TL; DR

- 타입스크립트 글로벌 설치 제거
- 타입스크립트 로컬 설치

---

## TypeScript 환경 설정


타입스크립트를 글로벌로 설치 후 특정 모듈을 사용하려면 에러가 발생한다.


```bash

Err: Cannot find module 'typescript/bin/tsc'
error Command failed with exit code 9 

```


이 모듈을 계속해서 시행 하려면 타입스크립트를 글로벌 설치가 아닌 로컬로 설치해주어야 한다.


```bash

yarn global remove typescript

yarn add typescript

```
