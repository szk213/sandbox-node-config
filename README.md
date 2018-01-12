# sandbox-node-config

node-configを試してみる

configのロード順は以下のリンク参照

- [File Load Order](https://github.com/lorenwest/node-config/wiki/Configuration-Files#file-load-order)

## メモ

- ホスト名と同じymlが読み込まれる
- custom-environment-variablesは配列が使用できない。以下のエラーが発生 
```
C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1289
        throw Error(msg);
        ^

Error: Illegal key type for substitution map at test2: object
    at _substituteVars (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1289:15)    at _substituteVars (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1284:11)    at Config.util.substituteDeep (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1294:3)
    at C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1314:43
    at Array.forEach (<anonymous>)
    at Config.util.getCustomEnvVars (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1310:12)
    at Config.util.loadFileConfigs (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:755:28)
    at new Config (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:122:27)
    at Object.<anonymous> (C:\Users\szk\github\szk213\sandbox-node-config\node_modules\config\lib\config.js:1767:31)
    at Module._compile (module.js:635:30)
```