#!/usr/bin/env node

var sys = require('util');
var fs = require('fs');
var rest = require('restler');

rest.get('http://shrouded-spire-3834.herokuapp.com/').on('complete', function(result) {
    fs.writeFileSync('test_result.html', result);
    //sys.puts(result);
})