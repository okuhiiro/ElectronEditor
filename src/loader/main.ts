'use strict';

var define;

namespace AMDLoader {
    let moduleManager: ModuleManager;
    let loaderAvailableTimestamp: number;

    function init(): void {
        console.log('Call: main.ts: init');

        moduleManager = new ModuleManager();
    }

    init();
}
