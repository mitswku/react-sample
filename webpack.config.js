var path = require("path");

module.exports = {
    entry: {
      app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx*$/,
                exclude: [/node_modules/],
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: "#source-map",
    devServer: {
        contentBase: "./public",
    }
};
