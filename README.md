# <a href="https://github.com/luwes/sinuous"><img src="https://sinuous.netlify.app/images/sinuous-logo.svg?sanitize=true" height="40" alt="Sinuous" /></a>

Yet another reactive framework based on Sinuous

## Why?

There is no way to use reactive frameworks for websites because of bad performance (FID, TTI).

Thats why even github use jquery-like libs.

## What?

This framework is in pre-alpha and was created to test partial hydration combined with jquery-like reactivity (thanks Sinuous).

Sinuous is fast, but doesnt have modern features like loops, if statements, components (single file components) and... **Partial hydration**.

Partial hydration is hydration that works only with dynamic and statefull parts of application.
It helps to use component and reactive paradigm for website development (not applications and SPA).

## How?

- **Partial hydration.** hydrate only dynamic parts of components
- **Single file components.** webpack loader and compiler (code transpiler) + component system
- **Automagic reactivity.** define a reactive variable and all methods/props that use that variable become reactive

## Benefits
- **Small.** hello world at `7.1kB` gzip.
- **Fast.** Thanks Sinuous and partial hydration.
- **Truly reactive.** automatically derived from the app state.
- **Tips & Tricks.** Slots, Loops, Statements and Props as we get used to

## Performance

It was dirty check, but +- in similar conditions.

Index page with 10k static components:
```javascript
<template>
  <div>
    <sbutton v-for="(item, key) in items" :key="key">
      Button {{ item }}
    </sbutton>
  </div>
</template>
````

sButton:
```javascript
<template>
  <div class="button">
    <slot />
  </div>
</template>
````

Metric  | SinuousCC | SinuousCC (Fn) | Sinuous | NuxtJS | NuxtJS (Fn)
------- | --------- | --------------------- | ------- | ------ | --------------------------------
Render  | 1018ms | 865ms | 297ms (single obj) | 3743ms | 1825ms
Hydration | 85ms | 68ms | 5000ms+ | 455ms | 238ms
Hydration (with onclick) | 165ms | 117ms | 5000ms+ | 707ms | 390ms
Hydration (full dynamic) | 75ms | - | 5000ms+ | 185ms | -
Full page size | 43kb | 39kb | 60kb | 169kb | 169kb


That framework is faster then Vue + NuxtJS in:
1. Full static: x3.5
1. Static with event: x3
1. Dynamic: x2.5
1. Page size: x4

## Todo

- [x] Single file components
- [x] Compiler (Alpha)
- [x] Partial hydration
- [x] Page lazy load
- [x] Statements Render
- [x] Loops Render
- [x] Slots Render
- [x] Statements hydration
- [ ] Loops hydration
- [x] Slots hydration
- [ ] Props
- [x] Functional components (automatic, need to reduce class init time)
- [ ] Make full page and test performance
- [ ] Init data 
- [ ] Component lazy load
- [ ] Dynamic Components
- [ ] SSR with initial data passing
- [ ] SSR Data fetching. (Server can fetch data only once. Then components are static)
- [ ] Auto detection statefull variables (depends on component template variable usage)

## Component example

```html
<template>
  <div v-if="testProp" v-for="(item) in [1, 2, 3]" @click="reactive_click">
    test {{ visible }} - {{ item }}
  </div>
</template>

<script>
import { d } from 'import-some-thing'

/**
 * Reactive (stateful) data defines with $
 */
let $visible = d;
let $clicks2 = {
  a: 2
};
/**
 * Normal data defines as usual variable
 */
let clicks = 1;
let testProp = false;

/**
 * Will become computed prop
 */
let computed = () {
  let k = [];
  
  for(let d in [1,2,3]) {
    k.push(visible);
  }

  return visible * 2 * 5;
}

/**
 * Usual methods
 */
function click(event) {
  clicks++;
  alert(this._data.clicks + `test ${ computed }`)
}

function reactive_click(event2) {
  // Work with reactive as with usual variable
  visible = visible + 1;
}
</script>
```


## Render 
```javascript
import Sinuous from '@sinuous/i';
import render from '@sinuous/render';
import TestComponent from 'components/test';
import TestPage from 'page/test';

Sinuous.registerComponent(TestComponent);

render(TestPage, document.getElementById('layout'));
```

## Hydration 
```javascript
import Sinuous from '@sinuous/i';
import hydration from '@sinuous/hydration';
import TestComponent from 'components/test';
import TestPage from 'page/test';

Sinuous.registerComponent(TestComponent);

hydration(TestPage, document.getElementById('layout'));
```


## Partial Hydration 

All components have 2 functions that create on component compilation step (webpack-loader):
1. Render
2. Hydration

Thats why on Server side (like NuxtJS) components should be imported with `?ssrOnly` and on client side with `?runtimeOnly`
You can use `?ssrOnly` and `?runtimeOnly`params to minify build code.

Server side
```javascript
import TestComponent from 'components/test?ssrOnly';
import TestPage from 'page/test?ssrOnly';
```

Client side
```javascript
import TestComponent from 'components/test?runtimeOnly';
import TestPage from 'page/test?runtimeOnly';
```

## Webpack

Use `@sinuous/loader` to compile SFC. 
Use `parseName` to make component autonaming 

```javascript
{
  test: /\.sin/,
  use: [
      {
    loader: '@sinuous/loader',
    options: {
      parseName(file) {
        file = camelize(file);
        let rootPath = camelize(path.resolve(__dirname, '../'));

          let componentPath = file
            .split(rootPath)
            .join('')
            .replace(/\.sin/i, '')
            .replace(/Components/, '')
            .replace(/(\s|\/)/g, '');

          return componentPath;
        }
      }
      }
  ]
},
```
