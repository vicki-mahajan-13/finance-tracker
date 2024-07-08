module.exports = function(api) {
  const validEnv = ['development', 'test', 'production'];
  const currentEnv = api.env();

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      `Please specify a valid \`NODE_ENV\` or \`BABEL_ENV\` environment variable. Valid values are "development", "test", and "production". Received: ${JSON.stringify(currentEnv)}.`
    );
  }

  const presets = [];
  const plugins = [
    'babel-plugin-macros',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-destructuring',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { useBuiltIns: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-transform-runtime', { helpers: false }],
    ['@babel/plugin-transform-regenerator', { async: false }]
  ];

  if (api.env('test')) {
    presets.push(['@babel/preset-env', { targets: { node: 'current' } }]);
    plugins.push('babel-plugin-dynamic-import-node');
  }

  if (api.env('production') || api.env('development')) {
    presets.push([
      '@babel/preset-env',
      {
        forceAllTransforms: true,
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]);
  }

  return {
    presets,
    plugins
  };
};
