'use strict';

const electron = require("electron");
const app = electron.app;
const path = require('path');
// コマンドライン引数パーサ
const minimist = require('minimist');
// src/～以下で絶対パスでrequireできるように
require('app-module-path').addPath(__dirname);

const paths = require('paths');

// Usage:
//  node_modules\.bin\electron . --user-data-dir <path> --locale <string>
// Ex:
//   node_modules\.bin\electron . --user-data-dir C:\app\ --locale hogehoge
//   npm run start_full_option
var args = minimist(
    process.argv,
    {string: ['user-data-dir', 'locale']}
);

var userDataDir = args['user-data-dir']
if (!userDataDir)
{
    userDataDir = paths.getAppDataPath(process.platform);
}

console.log(userDataDir);

app.quit();
