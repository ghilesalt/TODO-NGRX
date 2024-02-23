# BnpList
WARNING !! 
For Angular 17 when you create a project with `ng new my-app` you will not have app.module.ts. 
So you have to add this argument `--no-standalone`
## Install NGRX

Run `ng add @ngrx/store@latest` for ngrx store.

## Install TailwindCss

Run `npm install -D tailwindcss postcss autoprefixer` and `npx tailwindcss init` for getting tailwind.config.js.

## Configure tailwind.config.js

Copy on tailwind.config.js 
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
for use tailwind as class.

And add on src/styles.css next line :

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

And add on angular.json at projects/architect/build/styles this next line :
```json
"./node_modules/tailwindcss/tailwind.css"
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
