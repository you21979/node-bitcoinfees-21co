'use strict'
var rp = require('request-promise');
var constant = require('./constant');

var createGetOption = function(url) {
    return {
        url: url,
        method: 'GET',
        timeout: Math.floor(constant.OPT_TIMEOUT_SEC * 1000),
        transform2xxOnly : true,
        transform: function(body){
            return JSON.parse(body)
        },
    };
}

var get = function(method) {
    return rp(createGetOption(constant.API_BASE_URL + '/fees/' + method))
}

var recommended = exports.recommended = function() {
    return get('recommended')
}

var list = exports.list = function() {
    return get('list')
}


