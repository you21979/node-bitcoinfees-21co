# node-bitcoinfees-21co
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

## Error Handling

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




