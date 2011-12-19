var burrito = require("burrito");

module.exports = function(code, options) {
    var strings = {},
        vars = [],
        ast = burrito.parse(code, false, true),
        cleaner = /[^a-z0-9_$]/ig,
        replace = false,
        varTest = function(node) {
            return node.name === "var" && node.label().indexOf("__STRINGS__") > -1;
        },
        src;
    
    if(!options) {
        options = {
            threshold : 2
        };
    }
    
    //first go count strings & figure out if there is a place to put them
    burrito(ast, function(node) {
        if(varTest(node)) {
            replace = true;
        }
        
        if(node.name === "string") {
            var s = node.value[0];
            
            (!strings[s]) && (strings[s] = 0);
            
            strings[s]++;
        }
    });
    
    //bail if no __STRINGS__ var we can replace
    if(!replace) {
        return code;
    }
    
    //remove all strings that don't occur at least twice
    for(var s in strings) {
        if(strings[s] < options.threshold) {
            delete strings[s];
            
            continue;
        }
        
        strings[s] = "S_" + s.replace(cleaner, "").toUpperCase();
        
        vars.push(strings[s] + " = '" + s + "'");
    }
    
    vars = vars.join(",");
    
    //replace all string references & add our new variables
    src = burrito(ast, function(node) {
        if(varTest(node)) {
            node.wrap(function(expr) {
                return expr.replace("__STRINGS__", vars + ";");
            });
        }
        
        if(node.name === "string" && strings[node.value[0]]) {
            node.wrap(strings[node.value[0]]);
        }
    });
    
    return src;
};