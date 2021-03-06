import { compiler, _ } from '@siph/compiler';

// import { parseExpression } from '@siph/compiler/src/template/expression';
// import { parseHTML } from '@siph/compiler/src/template/html';

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
		<template v-if="visible">
			<div>
				[visible] show {{ ddd }} {{ s1 }} ({{ item }})
			</div>
			test
			<span v-if="s1">
				[s1] test
			</span>
		</template>
		<div v-else-if="s3">
			[s3] test
		</div>
		<div class="loop" v-for="(item, key) in s1" :key="key">
			{{ item }}
		</div>
		<template>
			<div>
				<slot name="header" tag="h1">
					default slot text 
				</slot>
				[none] hide
			</div>
		</template>
		<div>after-once-if</div>
		<child>
			default slot
			test 1
			<slot name="footer">footer-slot-test</slot>
			test 2
		</child>
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


source = `
<script>
let $s1 = 1;
let prop1 = Any | 'some';

function unmoutned()
{
	// clearInterval(timer);
}
</script>

<template>
	<div :class="prop1">
		<sbutton v-if="s1 % 2 === 0">
			Button
		</sbutton>

		<div v-else>1</div>
	</div>
</template>
`
// console.log(parseHTML(source));


let block = compiler({
	context: {},
	type: 'template',
	source: source,
});

console.log(block.source.render)
console.log('----------')
console.log(block.source.hydrate)
// console.log(block.source)
