# <a href="https://github.com/luwes/sinuous"><img src="https://sinuous.netlify.app/images/sinuous-logo.svg?sanitize=true" height="40" alt="Sinuous" /></a>

Yet another reactive framework based on Sinuous

## Why?

All reactive frameworks are really slow now days.
We can't use them to make fast websites and partial-dynamic web apps. (Thats why even github use jquery-like libs)

I am fully tired of developing slow web apps.
Build systems (like NuxtJS) have a lot of problems like backend-auth and cookie/session passing.

## What?

This framework is in pre-alpha and was created to test partial hydration combined with jquery-like reactivity (thanks Sinuous).

It uses Sinuous for reactivity and render, because it the fastest one.
Sinuous is really tiny and too far from Vue+Nuxt, React+Next and etc.

## How?

- **Partial hydration.** hydrate only dynamic parts of components
- **Single file components.** webpack loader and compiler (code transpiler) + component system
- **Automagic reactivity.** define a reactive variable and all methods/props that use that variable become reactive

## Benefits
- **Small.** hello world at `~8kB` gzip.
- **Fast.** Thanks Sinuous and partial hydration. (we need to finish slots, loopts and more to create realy website page and understand how fast is partial hydration work on partial-dynamic web apps)
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

Metric  | SinuousCC | Sinuous | NuxtJS | NuxtJS (Functional)
------------ | ------------ | ------------ | ------------- | -------------
Render | 1018ms | 297ms | 3743ms | 1825ms
Hydration | 23ms | 5000ms+ | 455ms | 238ms
Hydration (with onclick) | 856ms | 5000ms+ | 707ms | 390ms
Full page size | 43kb | 60kb | 169kb | 169kb

So... Sinuous is faster in x10 times if components are functional and x20 times with simple components.
Framework size is x4 less.

But! Thats only for full static components that do need hydration. Why? Because more that 60% of usual website is static.

## Todo

- [x] Single file components
- [x] Compiler (Alpha)
- [x] Partial hydration
- [x] Page lazy load
- [x] Statements Render
- [x] Loops Render
- [x] Slots Render
- [ ] Statements hydration
- [ ] Loops hydration
- [x] Slots hydration
- [ ] Props
- [ ] Functional components (automatic, need to reduce class init time)
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
