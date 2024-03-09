module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead',
        corejs: {
          version: 3,
        },
      },
    ],
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    '@babel/preset-typescript',
  ],

  plugins: ['@emotion', '@babel/plugin-transform-class-properties', ['@babel/plugin-transform-runtime', { corejs: 3 }]],
};
