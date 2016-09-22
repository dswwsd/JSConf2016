module.exports = function(babel) {
    return {
        visitor: {
            Literal: function(path) {
                if (path.node.value !== "Hello") {
                    return
                }
                path.node.value = "hehe"
            }
        }
    }
}