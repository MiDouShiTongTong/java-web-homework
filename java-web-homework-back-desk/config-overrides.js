const rewireSass = require('react-app-rewire-scss');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    // scss 支持
    config = rewireSass(config, env);
    // antd 库按需加载
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );
    return config;
};
