const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.s?css$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 10000,
      name: 'fonts/[name].[hash:7].[ext]'
    }
  });

  // Return the altered config
  return storybookBaseConfig;
};
