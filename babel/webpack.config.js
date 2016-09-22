
var webpack = require("webpack")

module.exports = {
    entry: "./src/import-demo/sub/app.js",
    output: { filename: "dist/import-demo.js" },
    module: {
        loaders: [
            {
                test: /.js/,
                loader: "babel-loader"
            }
        ]
    }
}