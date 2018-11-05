const path = require("path");

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: "development",
  output:{
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [
      // javascript loaders
      {
        test: /\.js$/,
        use:[
          {loader: "babel-loader"}
        ],
        exclude: /node_modules/
      },
      // css loaders
      {
        test: /\.css$/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      // html loaders
      {
        test: /\.html$/,
        use:[
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src"]
            }
          }

        ]
      },
      // image loaders
      {
        test: /\.(jpg|gif|png)$/,
        use:[
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }

    ]
  }
}