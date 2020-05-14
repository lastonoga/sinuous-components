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
	<div @click="alert(1)" :style="{ paddingTop: s2 }">
		test
		{{ s2 }}
		<br>
		<template v-if="visible" v-for="(item, key) in [1,2,3]">
			<div>
				[visible] show {{ ddd }}
			</div>
			<span v-if="s1">
				[s1] test
			</span>
		</template>
		<div v-else-if="s3">
			[s3] test
		</div>
		<template>
			<div>
				[none] hide
			</div>
		</template>
		<div>after-once-if</div>
	</div>
</template>

<script>
let $s1 = true;
let $s2 = 10;
let $s3 = false;

let ddd = '[test variable ddd]'
let timer1 = null;
let visible = true;

function makeIf()
{
	console.log('Make');

	s1 = true;
	s3 = true;

	console.log(s1, s3);
	setTimeout(() => {
		s1 = false;
		s3 = true;
		console.log(s1, s3);
	}, 1000)

	setTimeout(() => {
		s1 = false;
		s3 = false;
		console.log(s1, s3);
	}, 2000)

	setTimeout(() => {
		s1 = true;
		s3 = false;
		console.log(s1, s3);
	}, 3000)
}

function mounted()
{
	makeIf();
	timer1 = setInterval(() => {
		makeIf();
	}, 5000)
}

function unmounted()
{
	clearInterval(timer1);
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