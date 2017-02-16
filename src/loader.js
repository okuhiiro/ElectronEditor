'use strict';
var AMDLoader;
(function (AMDLoader) {
    var RequireFunc = (function () {
        function RequireFunc() {
            console.log("RequireFunc");
        }
        return RequireFunc;
    }());

    function init() {
        module.exports = RequireFunc;
    }

    init();
})(AMDLoader || (AMDLoader = {}));