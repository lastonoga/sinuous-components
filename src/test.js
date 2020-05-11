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
	<div @click="alert(1)">
		test
		{{ s2 }}
		<br>
		<template v-if="s1">
			<div>
				show {{ ddd }}
			</div>
			<span>
				test
			</span>
		</template>
		<div v-else-if="s3">
			test
		</div>
		<template v-else>
		hide
		</template>
		<div>after-once-if</div>
	</div>
</template>

<script>
let $s1 = true;
let $s2 = 10;
let $s3 = false;
let ddd = 1

function mounted() {
	alert(1);
}
</script>

`;

// parseHTML(source);


let block = compiler({
	context: data,
	type: 'template',
	source: source,
});

console.log(block.source.render)