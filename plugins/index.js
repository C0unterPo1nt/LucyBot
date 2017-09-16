/* eslint-disable global-require,import/no-dynamic-require,no-param-reassign */
const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach(file => {
    // Skip this file
    if (file === 'index.js') {
        return;
    }

    const moduleName = path.basename(file, '.js');
    module.exports[moduleName] = require(path.join(__dirname, file));
});
