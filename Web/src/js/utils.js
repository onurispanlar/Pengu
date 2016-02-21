/* global angular */

var utilsService = function() {
    
    this.callFunctionIfExist = function() {
        var args = Array.prototype.slice.call(arguments), func;
        func = args.shift();
        if (typeof (func) === 'function') {
            try {
                return func.apply(null, args);
            }
            catch (e) {
                logger.error("Exception occured:\n" + e.stack);
            }
        }
        else {
            logger.info("Not a function:" + func);
        }
    };
    
    return this;
};

angular.module('utils', []).factory('utilsService', [utilsService]);