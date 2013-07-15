#!/usr/bin/env node

/*
This program will parse the name of the input file to see if it is a url or a file
*/

var fs = require('fs');
var program = require('commander');


if (require.main === module) {
    console.log('Executed via command line');
    program
	.option('-c, --checks <file_path>', 'File name or url')
	.parse(process.argv);

    console.log('%s', process.argv[2]);

    process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
    });
}
else {
    console.log('Called indirectly');
}