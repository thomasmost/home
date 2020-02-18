exports.onCreateWebpackConfig = (
  { actions },
  { cssLoaderOptions = {}, postCssPlugins, ...sassOptions },
) => {

  const use = [
    {
      loader: require.resolve('sass-loader'),
    },
  ];

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use,
        },
      ],
    }
  });
};