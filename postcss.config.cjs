module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    }),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' && require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
  ].filter(Boolean),
  map: {
    inline: false,
    annotation: true,
  },
}; 