import { compiler, _ } from '@sinuous/compiler';

// import { parseExpression } from '@sinuous/compiler/src/template/expression';
// import { parseHTML } from '@sinuous/compiler/src/template/html';

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
	<div @click="s2 = 123" :class="{ d: 1}" :style="{ paddingTop: s2 }">
		test
		{{ s2 }}
		<br>
		<template v-if="s1 === true">
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
let ccc = true

function mounted() {
	alert(1);
}
</script>

`;



// console.log(parseHTML(source));


let block = compiler({
	context: {},
	type: 'template',
	source: source,
});

console.log(block.source.hydrate)