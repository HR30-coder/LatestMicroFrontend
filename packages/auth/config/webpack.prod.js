const { merge } = require('webpack-merge');
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        publicPath : `${domain}/auth/latest/`,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: "remoteEntry.js",
            exposes: {
                './authIndex': './src/bootstrap',
            },
            shared: packageJSON.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig); //merge has devConfig as the 2nd arg means devConfig overridesthe prodConfig