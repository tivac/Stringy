var fs = require('fs');
var strings = require("./lib/strings.js");

//var parser = require("uglify-js").parser;

for (var i = 1; i < process.argv.length; i++) {
    var file = process.argv[i];
    if (file.indexOf('stringy') == -1) {
        fs.readFile(file, function(err, data) {
            var src = strings.transform(file, data.toString());
            
            console.log(src);
        });
    }
}