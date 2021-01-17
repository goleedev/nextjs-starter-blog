---
title: VSCode에서 code command가 동작하지 않을 때 😓

description: How to make it work on MacOS!

category: TIL

date: 2021-01-17
---

![code-vscode](code-vscode.jpg)

## 🤦 TL; DR

- VSCode가 Applications 폴더에 있는지 확인하기

- PATH에 'code' command 설치하기

---

## "code" command

비주얼 스튜디오 코드에서 code command를 사용하게 되면, 터미널에서 위치한 현재 위치를 비주얼 스튜디오 코드로 오픈할 수 있기 때문에 생산성을 높일 수 있습니다. code command가 작동하지 않을 때는 다음과 같이 설정해주면 됩니다.

---

## "code" command 설정하기

1. VSCode를 **Applications 폴더**에 없다면, 어플을 찾아서 해당 폴더로 옮겨줍니다.

2. VSCode를 켭니다.

3. **Command Palette** **(⇧⌘P)**를 눌러 `shell command`를 입력합니다.

4. 검색 결과 중, **Install 'code' command in PATH command**를 눌러주면 설치가 완료 됩니다.

---

### 🔗 Reference

[“code .” Not working in Command Line for Visual Studio Code on OSX/Mac](https://stackoverflow.com/questions/29955500/code-not-working-in-command-line-for-visual-studio-code-on-osx-mac)
