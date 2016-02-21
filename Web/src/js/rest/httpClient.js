/* global angular*/

var HTTPClientService = function(utilsService) {
    var API_URL = window.location.origin + ":3000/";

    function _sendRequest(reqType, url, data, header, successCallback, failureCallback) {
        var httpRequest = new window.XMLHttpRequest(),
            reqUrl = API_URL + url;

        httpRequest.onreadystatechange = function() {
            var responseData;
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    responseData = JSON.parse(httpRequest.responseText);
                    if (!responseData.error) {
                        utilsService.callFunctionIfExist(successCallback, responseData);
                    } else {
                        utilsService.callFunctionIfExist(failureCallback, responseData);
                    }
                } else {
                    utilsService.callFunctionIfExist(failureCallback, httpRequest.error);
                }
            }
        };

        httpRequest.open(reqType, reqUrl);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(JSON.stringify(data));
    }

    this.get = function(url, data, successCallback, failureCallback, headers) {
        _sendRequest("GET", url, data, headers,  successCallback, failureCallback);
    };

    this.post = function(url, data, successCallback, failureCallback, headers) {
        _sendRequest("POST", url, data, headers,  successCallback, failureCallback);
    };

    this.put = function(url, data, successCallback, failureCallback, headers) {
        _sendRequest("PUT", url, data, headers,  successCallback, failureCallback);
    };

    this.delete = function(url, data, successCallback, failureCallback, headers) {
        _sendRequest("DELETE", url, data, headers,  successCallback, failureCallback);
    };
    
    return this;
};

angular.module("rest", ["utils"])
    .factory("httpClientService", ["utilsService", HTTPClientService]);