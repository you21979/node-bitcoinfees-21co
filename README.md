# node-bitcoinfees-21co

[![NPM](https://nodei.co/npm/bitcoinfees-21co.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bitcoinfees-21co)  
[![Build Status](https://secure.travis-ci.org/you21979/node-bitcoinfees-21co.png?branch=master)](https://travis-ci.org/you21979/node-bitcoinfees-21co)
[![Coverage Status](https://coveralls.io/repos/github/you21979/node-bitcoinfees-21co/badge.svg?branch=master)](https://coveralls.io/github/you21979/node-bitcoinfees-21co?branch=master)

bitcoinfees from 21.co

## API Document

* https://bitcoinfees.21.co/api

## limit

```
Current API Rate Limit: 5000 requests per hour.
```

* 5000 req/hour
* 83.3 req/min
* 1.3 req/sec

## install

```
npm i bitcoinfees-21co
```

## Usage

### recommended

```
var bitcoinfees = require('bitcoinfees-21co');
bitcoinfees.FeesApi.recommended().then(function(res){
    console.log(res)
})
```

```
{ "fastestFee": 40, "halfHourFee": 20, "hourFee": 10 }
```

### list

```
var bitcoinfees = require('bitcoinfees-21co');
bitcoinfees.FeesApi.list().then(console.log)
```

```
{ "fees": [ 
  {"minFee":0,"maxFee":0,"dayCount":545,"memCount":87,
  "minDelay":4,"maxDelay":32,"minMinutes":20,"maxMinutes":420},
...
 ] }
```

## HTTP Error Handling

### simple error control

```
bitcoinfees.FeesApi.recommended().catch(function(e){
    console.log(e.message)
})
```

### technical error control

```
var errors = require('bitcoinfees-21co/errors')
bitcoinfees.FeesApi.recommended()
    .catch(errors.StatusCodeError, function (reason) {
        // HTTP STATUS ERROR(404 or 500, 502, etc...)
        console.log("HTTP StatusCodeError " + reason.statusCode, "HTTP", reason.statusCode)
    })
    .catch(errors.RequestError, function (reason) {
        // REQUEST ERROR(SYSTEMCALL, TIMEOUT)
        console.log(reason.message, "SYSCALL", reason.error.code)
    })
    .catch(function(e){
        // OTHER ERROR
        console.log(e.message)
    })
```

## VALUE Error Handling

```
var bitcoinfees = require('bitcoinfees-21co');
var assert = require('assert');
var clamp = function(value, min, max){
    return Math.min(Math.max(min, value), max)
}
bitcoinfees.FeesApi.recommended().then(function(res){
    assert(res.hourFee > 0);
    return clamp(res.hourFee, 20, 200) // The API obstacle leads to loss
})
```

## memo

It is better to store it in the database when using it on the server

