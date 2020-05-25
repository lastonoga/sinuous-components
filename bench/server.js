// import PageC from './components/page.sin?ssrOnly'
// import StatefullC from './components/statefull.sin?ssrOnly'
// import StatelessC from './components/stateless.sin?ssrOnly'
// import WithEventC from './components/withEvent.sin?ssrOnly'


let components = {
	'statefull': null,
	'stateless': null,
	'withEvent': null,
};

for(let name in components)
{
	components[name] = require(`./components/${ name }.sin?ssrOnly`);
}

console.log(components);