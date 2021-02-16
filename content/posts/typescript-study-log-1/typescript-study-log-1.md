---
title: ✍️ TypeScript Study Log 1
category: TypeScript
description: TIL @TS
date: 2021-02-16
---

## 🤦 TL; DR

- TS Basics
- TS Settings
- TS Modules
- TS Functions
- TS Interfaces
- TS Types

---

# 02/16 TS Day 1

### Basics

- ES7 supports const, let
- TS = JS + Latest ECMA JS Features + Type system
- presence of tsconfig.json dir = root dir of proj.
- TS(w/o input files), search toward tsconfig.json file (from current dir)

```jsx
{
    "compilerOptions": {
        The options from the "Compiler Options" doc(https://www.typescriptlang.org/docs/handbook/compiler-options.html), like:
        "target": "es6",
        "outDir": "dist"
    }
    Other options, like:
    "files": [],
    "include": [], ex) "include": ["src/**/*"]: compile all files under src folder
    "exclude": []
}
```

- npm i -D = —save-dev : package.json에서 dev-dependencies에 기록, 개발할 때만 필요한 module들을 다운로드
- npx tsc --init: create tsconfig.json file
- npx tsc -w: in watch mode
- npx nodemone path / npx nodemon -w dist -q dist/index.js: watch folder quite mode

---

### Modules

- Similar to ES6 - import from, export
- import def, {export} from 'module'

### Types

- Null - compilerOptions: { "strictNullChecks": true }
- Object - can only assign non-primitive types
- Void: not returning
- Array: let arr1: string[] = ['x', ...]; let arr2: Array<string> = arr1;
- Tuple: array with fixed num of el / let tuple: [string, number] = ['str', 1];
- Enum: standard set of datatypes / cannot reverse lookup a value in strings enum
  ![Enum](enum.png)
- Any
- Type Assertions: angle-bracket or as / assign more detailed types

---

### Interfaces

- readonly prop
- prop? = optional
- interface Child extends Parent, ...

### Functions

- overloads
