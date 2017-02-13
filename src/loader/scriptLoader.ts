namespace AMDLoader {
    export interface IScriptLoader {
    }

    interface IScriptCallbacks {
        callback: () => void;
        errorback: (err: any) => void;
    }

    class OnlyOnceScriptLoader implements IScriptLoader {
        private actualScriptLoader: IScriptLoader;
        private callbackMap: { [scriptSrc: string]: IScriptCallbacks[]; };

        constructor(actualScriptLoader: IScriptLoader) {
            this.actualScriptLoader = actualScriptLoader;
            this.callbackMap = {};
        }
    }

    class BrowserScriptLoader implements IScriptLoader {
    }

    export const scriptLoader: IScriptLoader = new OnlyOnceScriptLoader(
        new BrowserScriptLoader()
    )
}