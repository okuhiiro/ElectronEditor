'use strict';

//var define;

namespace AMDLoader {
    let moduleManager: ModuleManager;
    //let loaderAvailableTimestamp: number;

    export class RequireFunc {
        constructor() {
        }
    }

    function init(): void {
        console.log('Call: main.ts: init');

        moduleManager = new ModuleManager(scriptLoader, Date.now());

        module.exports = RequireFunc;
    }

    init();
}
