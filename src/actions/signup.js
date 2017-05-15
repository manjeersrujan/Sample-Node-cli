/**
 * Created by z001v3f on 5/13/17.
 */


var awardMap = {
    "www.shopback.sg": ["SGD", 5.00],
    "www.shopback.my" : ["MYR", 10.00],
    "www.shopback.co.id" : ["IDR", 25.000],
    "www.shopback.com.tw" : ["TWD", 1000.00],
    "www.myshopback.co.th" : ["THB", 500.00],
    "www.myshopback.com" : ["USD", 5.00]
};


exports.handle = function (args) {
    if(!!args && args.length >= 1){
        if(!!awardMap[args[0]]){
            award =  "Award bonus: "+awardMap[args[0]][1].toFixed(2)+" "+awardMap[args[0]][0];
            return award;
        } else{
            throw new Error("Domain not Found: " + args[0])
        }
    } else{
        throw new Error("Domain missing")
    }
};

exports.description = function (args) {
    return "Award corresponding bonus amount with currency";
};


