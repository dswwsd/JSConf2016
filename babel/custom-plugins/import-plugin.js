'use strict';
module.exports = function(babel) {
    let t = babel.types;
    return {
        visitor: {
            ImportDeclaration: function(path){
                var filepath = path.node.source.value;
                if (filepath[0] !== "@") {
                    return;
                }
                filepath = filepath.substring(1)
                filepath = process.cwd() + "/src/import-demo/" + filepath;
                path.node.source.value = filepath;
            },
            BinaryExpression(path) {
              if (path.node.operator !== "===") {
                return;
              }
              path.node.left = t.identifier("\'foo\'");
              path.node.right = t.identifier("\'bar\'");
            }
        }
    }
}