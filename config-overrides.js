const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');

module.exports = {
    webpack: function override(config, env) {
        config = rewireAliases.aliasesOptions({
            '@': path.resolve(__dirname, `${paths.appSrc}/`)
        })(config, env);
        return config;
    },
    jest: function(config) {
        // ...add your jest config customisation...
        // Example: enable/disable some tests based on environment variables in the .env file.
        if (!config.testPathIgnorePatterns) {
            config.testPathIgnorePatterns = [];
        }
        return config;
    }
}