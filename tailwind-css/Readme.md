# Start

```
npm init -y
npm install tailwindcss
```

Create source and pulic folder
Add Styles.css in src
add below lines in styles.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

Now in Package.json add below script

```
"build-css": "tailwindcss build src/styles.css -o public/styles.css"
```
