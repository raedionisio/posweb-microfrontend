const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:9002/'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        port: 9002, 
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cadastrar',
            filename: 'remoteEntry.js',
            exposes: {
                "./CadastrarClienteApp" : path.resolve(__dirname, 'src', 'components', 'CadastrarCliente'),
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^18.1.0"
                },
                "react-dom":{
                    singleton: true,
                    requiredVersion: "^18.1.0"
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_mudules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}