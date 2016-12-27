var bitcoinfees = require('..');

bitcoinfees.FeesApi.recommended().then(function(res){
    var count = 10
    var txsize = 240 * count;
    var satoshis = res.hourFee * txsize 
    console.log('tx count=' + count + ', bitcoin fees=' + (satoshis * 1e-8).toFixed(8))
})
