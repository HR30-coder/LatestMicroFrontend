const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8081/"
    },
    devServer: {
        port: 8081,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./marketIndex":"./src/bootstrap.js"
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, devConfig); //merge has devConfig as the 2nd arg means devConfig overridesthe prodConfig