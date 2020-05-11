

import * as parser from "@babel/parser";
import generate from "@babel/generator";

import { createData } from "./data";
import parseContext from "./parseContext";
import parseExpression from "./parseExpression";
import parseMethods from "./parseMethods";
import AstGenerator from "./AstGenerator";


/**
 * Compiler
 * @param  {[type]} source [description]
 * @return {[type]}        [description]
 */
export function getReactiveVariables(context, source)
{
	let data = createData(context);

	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	parseContext(data, ast);

	let reactive_variables = [];

	reactive_variables = reactive_variables
		.concat(Object.keys(data.state))
		.concat(Object.keys(data.computed));

	return {
		reactive_variables,
		data,
	};
}

export function compileScript(context, source)
{
	let data = createData();
		// console.log(data);
	const ast = parser.parse(source, {
		sourceType: "unambiguous",
		strictMode: false,
	});

	parseContext(data, ast);
	parseExpression(data, ast);

	// console.log(data);

	return generate(AstGenerator(data), {
		retainLines: false,
		compact: false,
		minified: false,
		concise: false,
		quotes: "double",
	}, source);
}
