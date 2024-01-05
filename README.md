# あと何日

指定した日時までの日数などを表示します。
2024/1/1　3時間くらいで作る

URL: https://lzpel.github.io/calendar/

使用例URL(作者の死まで):https://lzpel.github.io/calendar/life?date=1996-06-06

## 以下メモ

```
smith@DESKTOP-F8JCPGN:~/calendar$ npx create-next-app@latest
Need to install the following packages:
create-next-app@14.0.4
Ok to proceed? (y) y
✔ What is your project named? … .
The directory calendar contains files that could conflict:

README.md

Either try using a new directory name, or remove the files listed above.

smith@DESKTOP-F8JCPGN:~/calendar$ npx create-next-app@latest
✔ What is your project named? … .
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
Creating a new Next.js app in /home/smith/calendar.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next


added 283 packages, and audited 284 packages in 43s

107 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
Success! Created calendar at /home/smith/calendar
```

## ESLintとWebStormの連携

以下の手順で、WebStormでESLintのエラーをエディター上に表示することができます。

1. WebStormの設定画面を開きます。
2. 「Languages & Frameworks」→「JavaScript」→「Code Quality Tools」→「ESLint」を選択します。
3. 「Automatic ESLint configuration」を有効にします。
4. 「Node interpreter」に、Node.jsのインストール先を指定します。
5. 「ESLint package」に、ESLintのインストール先を指定します。
