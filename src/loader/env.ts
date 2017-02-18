const _amdLoaderGlobal = this;

declare var module: {
	exports: any;
};

namespace AMDLoader {
    export const global: any = _amdLoaderGlobal;
}