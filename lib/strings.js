var burrito = require("burrito");

var transform = function(file, code) {
    var strings = {},
        vars = [],
        ast = burrito.parse(code, false, true),
        cleaner = /[^a-z0-9_$]/ig,
        src;
    
    //first go count strings
    burrito(ast, function(node) {
        if(node.name === "string") {
            var s = node.value[0];
            
            (!strings[s]) && (strings[s] = 0);
            
            strings[s]++;
        }
    });
    
    //remove all strings that don't occur at least twice
    for(var s in strings) {
        if(strings[s] < 5) {
            delete strings[s];
            
            continue;
        }
        
        strings[s] = "S_" + s.replace(cleaner, "").toUpperCase();
        
        vars.push(strings[s] + " = '" + s + "'");
    }
    
    vars = vars.join(",");
    
    //replace all strings references
    src = burrito(ast, function(node) {
        if(node.name === "string" && strings[node.value[0]]) {
            node.wrap(strings[node.value[0]]);
        }
    });
    
    //have to use our new source here, old AST is dead to us
    src = burrito(src, function(node) {
        if(node.name === "var" && node.label().indexOf("__STRINGS__") > -1) {
            node.wrap(function(expr) {
                return expr.replace("__STRINGS__", vars + ";");
            });
        }
    });
    
    return src;
};


exports.transform = transform;