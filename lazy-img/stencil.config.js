const sass = require('@stencil/sass');

exports.config = {
  namespace: 'lazyimg',
  generateDistribution: true,
  plugins: [
    sass()
  ],
  bundles: [
    { components: ['lazy-img'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}