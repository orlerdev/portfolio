const dynamicIconImportConfig = {
  plugins: [
    ['macros', {
      'fontawesome-svg-core': {
        'license': 'pro',
        'pro': true
      }
    }]
  ]
};

const babelConfig = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    dynamicIconImportConfig // Include the dynamic icon import configuration here
  ]
};

export default babelConfig;
