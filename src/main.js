'use strict';

const electron = require('electron')
const app = electron.app

const minimist = require('minimist');
var argv = minimist(process.argv);
console.log(argv);

app.quit();