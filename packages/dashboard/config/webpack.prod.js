const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        pubicPath : '/auth/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                "./marketIndex":"./src/bootstrap.js"
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig); //merge has devConfig as the 2nd arg means devConfig overridesthe prodConfig