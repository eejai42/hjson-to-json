#!/usr/bin/env node
'use strict';

const fs = require('fs');
const hjson = require('hjson');
const program = require('commander');

function runApp(args) {
    try {
        program
            .option('-i, --input <input>', 'input HJSON file')
            .option('-o, --output <output>', 'Output json file name.  Default value: {input file name}.json')
            .option('-h, --help', 'Show the usage/help documentation.')
            .action(action => {
                program.input = action.input
                program.output = action.output || action.input + '.json';
            })
            .parse(args);

        if (!program.input) {
            console.error('Error: Required option -i, --input <input> not specified');
            console.error('');
            console.error('Usage: hjson-to-json -i, --input <input> [options]');
            console.error('');
            console.error('');
            console.error('Options:');fs.lstat
            console.error('-i, --input <input>  Input HSJON file');
            console.error('-o, --output <output>  Output json file name. Default value: hjson.json');
            console.error('-h, --help     Output usage information');
            console.error('');
            
            process.exit(1);
        }

        // Read the input HSJON file
        console.error(program.input)
        const input = fs.readFileSync(program.input, 'utf-8');

        console.error(input);

        // Parse the input and generate the AST
        const ast = hjson.parse(input);

        // Convert the AST to JSON
        const json = JSON.stringify(ast, null, 2);

        // Write the JSON to the output file
        fs.writeFileSync(program.output, json);

    } catch (err) {
        console.error(err);
    }    
}

runApp(process.argv)

module.exports = { runApp };
