var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: "./LazyAsset.js",
    output: {
        libraryTarget: "umd",
        library: "LazyAsset",
        path: path.resolve(__dirname, 'dist'),
        filename: "LazyAsset.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    },
    externals: [
        {
            "react-dom": {
                root: "ReactDOM",
                commonjs2: "react-dom",
                commonjs: "react-dom",
                amd: "react-dom"
            }
        },
        {
            react: {
                root: "React",
                commonjs2: "react",
                commonjs: "react",
                amd: "react"
            }
        },
        {
            "prop-types": {
                root: "PropTypes",
                commonjs2: "prop-types",
                commonjs: "prop-types",
                amd: "prop-types"
            }
        },
        {
            "create-react-app": {
                root: "CreateReactApp",
                commonjs2: "create-react-app",
                commonjs: "create-react-app",
                amd: "create-react-app"
            }
        }
    ]
};