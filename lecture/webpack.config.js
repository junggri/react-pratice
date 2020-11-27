const path = require("path");
const devserver = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  name: "word-relay-setting",
  mode: "development", //prodction
  devtool: "eval", //Q빠르게 하겠다?
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/, //js와 jsx에 적용하게다
        loader: "babel-loader", //거기에 바벨로더적용한다
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties", "react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new devserver()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  }, //출력
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
