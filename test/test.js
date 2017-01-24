'use strict';
var assert = require('assert');
var les = require("local-echoserver");
var bitcoinfees = require('..');

describe('test', function () {
    
    describe('test', function () {

        it('recommended', function () {
            return les(function(url){
                bitcoinfees.Constant.API_BASE_URL = url + "/api/v1";
                return bitcoinfees.FeesApi.recommended().then(function(res){
                    assert(res.fastestFee === 40);
                })
            }, function(res, headers, method, url, body){
                assert(method === 'GET');
                assert(url === '/api/v1/fees/recommended');
                var result = JSON.stringify({
                    fastestFee: 40,
                    halfHourFee: 20,
                    hourFee: 10
                });
                res.end(result);
            })
        })
        it('list', function () {
            return les(function(url){
                bitcoinfees.Constant.API_BASE_URL = url + "/api/v1";
                return bitcoinfees.FeesApi.list().then(function(res){
                })
            }, function(res, headers, method, url, body){
                assert(method === 'GET');
                assert(url === '/api/v1/fees/list');
                var result = JSON.stringify({
                });
                res.end(result);
            })
        })

    })
})
