declare const _amdLoaderGlobal: any;
declare var module: {
    exports: any;
};
declare namespace AMDLoader {
    const global: any;
}
declare namespace AMDLoader {
    class ModuleManager {
        constructor(scriptLoader: IScriptLoader, loaderAvailableTimestamp?: number);
    }
}
declare namespace AMDLoader {
    interface IScriptLoader {
    }
    const scriptLoader: IScriptLoader;
}
declare namespace AMDLoader {
    class RequireFunc {
        constructor();
    }
}
