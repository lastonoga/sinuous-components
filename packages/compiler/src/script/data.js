export const data = {
	imports: [],
	props: {},
	data: {},
	state: {},
	computed: {},
	methods: {},
}

export function createData(context) {
	return Object.assign({}, data, {}, context);
}