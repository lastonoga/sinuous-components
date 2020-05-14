import Sinuous from '@sinuous/i';
import hydration from '@sinuous/hydration';
import render from '@sinuous/render';
import test from '../components/test.sin'
import test2 from '../components/test2.sin'
import IndexPage from '../pages/index.sin'
import timeBenchmark from './time';


// const IndexPage = import(/* webpackChunkName: "pageIndex" */ '../pages/index.sin')


var LAYOUT;
var PageIndex, PageIndex2;

function TEST_WEBPACK_BUILD()
{
	timeBenchmark('SSR-Build');
	Sinuous.registerComponent(test);
	Sinuous.registerComponent(test2);
	timeBenchmark('SSR-Build');
}

// function TEST_INIT()
// {
// 	timeBenchmark('SSR-Init');
// 	PageIndex = new IndexPage();
// 	PageIndex2 = new IndexPage();
// 	timeBenchmark('SSR-Init');
// }

function TEST_RENDER()
{
	render(IndexPage, LAYOUT, timeBenchmark);
}

function CLEAR_HOOKS()
{
	
	let html = LAYOUT.innerHTML;
	LAYOUT.innerHTML = html;
}

function TEST_HYDRATE()
{
	hydration(IndexPage, LAYOUT, timeBenchmark, (c) => {
		c.hook('mounted');
	});
}

TEST_WEBPACK_BUILD();

// TEST_INIT();

// return;
(function load() {
	LAYOUT = document.getElementById('layout');


	// LAYOUT.innerHTML = '';
	// requestIdleCallback(() => {
	// TEST_HYDRATE();
	// return;

	// setTimeout(() => {
	// 	TEST_RENDER();
	// }, 2000)

	TEST_RENDER();
	// console.log(LAYOUT.innerHTML)
	return

	setTimeout(() => {

		CLEAR_HOOKS();

		setTimeout(() => {
			 TEST_HYDRATE();
		}, 300);
	}, 1000);
})();