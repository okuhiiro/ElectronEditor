var _amdLoaderGlobal = this;
var AMDLoader;
(function (AMDLoader) {
    AMDLoader.global = _amdLoaderGlobal;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (AMDLoader) {
    var ModuleManager = (function () {
        function ModuleManager(scriptLoader, loaderAvailableTimestamp) {
            if (loaderAvailableTimestamp === void 0) { loaderAvailableTimestamp = 0; }
        }
        return ModuleManager;
    }());
    AMDLoader.ModuleManager = ModuleManager;
})(AMDLoader || (AMDLoader = {}));
var AMDLoader;
(function (AMDLoader) {
    var OnlyOnceScriptLoader = (function () {
        function OnlyOnceScriptLoader(actualScriptLoader) {
            this.actualScriptLoader = actualScriptLoader;
            this.callbackMap = {};
        }
        return OnlyOnceScriptLoader;
    }());
    var BrowserScriptLoader = (function () {
        function BrowserScriptLoader() {
        }
        return BrowserScriptLoader;
    }());
    AMDLoader.scriptLoader = new OnlyOnceScriptLoader(new BrowserScriptLoader());
})(AMDLoader || (AMDLoader = {}));
'use strict';
var AMDLoader;
(function (AMDLoader) {
    var moduleManager;
    var RequireFunc = (function () {
        function RequireFunc() {
        }
        return RequireFunc;
    }());
    AMDLoader.RequireFunc = RequireFunc;
    function init() {
        console.log('Call: main.ts: init');
        moduleManager = new AMDLoader.ModuleManager(AMDLoader.scriptLoader, Date.now());
        module.exports = RequireFunc;
    }
    init();
})(AMDLoader || (AMDLoader = {}));
