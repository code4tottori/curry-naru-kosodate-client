# react-sass-boilerplate

Quick start for React and Sass

Required: Node.js v4

## Files

- .babelrc : Babel configuration
- .eslintrc.js : ESLint configuration for gulpfile.js
- .gitignore
- gulpfile.js : Build tasks
- package.json : Customize this for your project
- README.md : Customize this for your project
- build : Build directory
- src : Source directory
  - index.html : Single HTML file
  - images : Images are here
  - scripts : Front-end js and jsx are here
    - .eslintrc.js : ESLint configuration for front-end scripts
    - main.js : JavaScript entry point

## Usage

At the beginning you have to install modules:

```
npm i
```

To start live reload:

```
npm start
```

Just to build:

```
npm run build
```

## Modules

- browser-sync
- browserify
  - babelify
    - babel-polyfill
    - babel-preset-es2015
    - babel-preset-react
  - licensify
  - watchify
- eslint
  - eslint-plugin-node
  - eslint-plugin-react
- del
- gulp
  - gulp-changed
  - gulp-load-plugins
  - gulp-notify
  - gulp-plumber
  - gulp-sass
    - gulp-autoprefixer
    - gulp-cssnano
    - gulp-uglify
  - gulp-sourcemaps
  - vinyl-buffer
  - vinyl-source-stream
- react
  - react-dom
