//merge has devConfig as the 2nd arg means devConfig overridesthe prodConfig

const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJSON = require("../package.json");
const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename : '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing : `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared : packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig);