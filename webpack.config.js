const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config(); 

module.exports = {
    entry: './assets/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'
}; 


const environmentVariables = [
    "APIKEY"
];

plugins: [
    new webpack.EnvironmentPlugin(environmentVariables)
]