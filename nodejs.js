var fs = require('fs');
var argv = require('optimist').argv;
var stringy = require("./lib/stringy.js");

argv._.forEach(function(f) {
    fs.readFile(f, function(err, data) {
        if(err) {
            return;
        }
        
        var src = stringy(data.toString());
        
        console.log(src);
    });
});