const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/talk-container.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "talk-container.js",
    libraryTarget: "system",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
    modules: ["src", "node_modules"], // Assuming that your files are inside the src dir
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    rxjs: "rxjs",
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      webSocketURL: {
        hostname: "localhost",
      },
    },
    allowedHosts: "all",
  },
};
