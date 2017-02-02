'use strict';

const electron = require('electron');
const app = electron.app;
const path = require('path');
const fs = require('fs');
// コマンドライン引数パーサ
const minimist = require('minimist');
// src/～以下で絶対パスでrequireできるように
require('app-module-path').addPath(__dirname);

const paths = require('paths');
const loader = require('loader');

// Usage:
//  node_modules\.bin\electron . --user-data-dir <path> --config-file <path>
// Ex:
//   node_modules\.bin\electron . --user-data-dir C:\app\ --config-file C:\app\User\locale.json
//   npm run start_full_option
var args = minimist(
    process.argv,
    {string: ['user-data-dir', 'locale']}
);

function getUserDataDir() {
    var userDataDir = args['user-data-dir']
    if (!userDataDir)
    {
        userDataDir = paths.getAppDataPath(process.platform);
    }

    return userDataDir;
}

function getConfigFile() {
    var configFile = args['config-file']

    if (!configFile)
    {
        var userData = app.getPath('userData');
        var defaultConfigFile = path.join(userData, 'User', 'locale.json');
        try {
            fs.statSync(defaultConfigFile);
        } catch (e) {

        }
    }

    return configFile;
}

//console.log(app.getPath('userData'));
//console.log(getUserDataDir());

app.quit();
