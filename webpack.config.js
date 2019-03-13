const path = require("path");

module.exports={
    entry:'./src/playground/redux-expensify.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },
        { test: /\.s?css$/, loader: "style-loader!css-loader!sass-loader" },
        ]
      
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        historyApiFallback:true
    },
    mode:'development'
};