import { compiler, _ } from '@sinuous/compiler';

// import { parseExpression } from '@sinuous/compiler/src/template/expression';
import { createData } from "@sinuous/compiler/src/script/data";
import parseHTML from '@sinuous/compiler/src/template/html';


let data = createData();

data.data = {
	d1: 1,
	d2: 1,
}

data.state = {
	s1: 1,
	s2: 1,
}

data.computed = {
	c1: 1,
	c2: 1,
}

data.methods = {
	m1: 1,
	m2: 1,
}

// parseExpression(data, `
// let d = function() {}
// let d2 = () => {}
// function c1(s3) {
// 	let d = [];
// 	for(let i = 0; i < s1.length; i++) {
// 		d.push(s1[i]);
// 	}
// }
// `)
// parseExpression(data, '{ s1: () => s1 }')
// parseExpression(data, 'alert();', true)
// parseExpression(data, 'm1(event)')
// parseExpression(data, 's1 += 6')
// parseExpression(data, 'd1 = d1 + 6')
// parseExpression(data, 'd1 /= 6')
// parseExpression(data, 'd.push(s1)')
// parseExpression(data, 'd = () => { return s1 }')


let source = `
<template>
	<div @click="reactive_click">
		test {{ visible }}
	</div>
</template>

<script>
import { d } from '../src/test-import.js'

/**
 * State
 * @type {Number}
 */
let $visible = d;
let $clicks2 = {
	a: 2
};
let clicks = 1;
/**
 * Computed
 * @return {[type]} [description]
 */
let computed1 = function() {
	return 1;
}

let computed2 = () => {
	let k = [];
	
	for(let d in [1,2,3]) {
		k.push(visible);
	}

	return visible * 2 * 5;
}

/**
 * Methods
 */
function click(event) {
	clicks++;
	alert(this._data.clicks)
}

function reactive_click(event2) {
	visible += 1;
}

// function mounted() {

// }
</script>
`;

// parseHTML(source);


let block = compiler({
	context: data,
	type: 'template',
	source: source,
});

console.log(block.source.render)