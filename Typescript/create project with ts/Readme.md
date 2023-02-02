# Getting Started with ts in project

## Initialize ts

-  initialize ts in your project

```
tsc --init
```

-  Above command will create tsconfig file
-  Init a Project

```
npm init -y
```

-  Now we can add index.html file
-  in that file we need to link script file
-  that js file should come from dist folder: ts output
-  to generate that folder we need to mention in Tsconfig.json file
-  Go to that file and just un comment and give "outDir":"./dist" value
-  Start watch mode for ts by using below command

```js
tsc - W;
```

-  This command will create dist/index.js file
