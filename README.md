# node-bitcoinfees-21co
bitcoinfees from 21.co

## API Document

* https://bitcoinfees.21.co/api

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


