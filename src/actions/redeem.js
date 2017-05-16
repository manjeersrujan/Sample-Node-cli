/**
 * Created by Manjeer on 5/13/17.
 * This is implementation of redeem command
 */

var awardMap = {
    "www.shopback.sg": "https://www.shopback.sg",
    "www.shopback.my" : "https://www.shopback.my",
    "www.shopback.co.id" : "https://www.shopback.co.id",
    "www.shopback.com.tw" : "https://www.shopback.com.tw",
    "www.myshopback.co.th" : "https://www.myshopback.co.th",
    "www.myshopback.com" : "https://www.shopback.com"
};


/*
 Handle method gets all CLI arguments and return result
 */
exports.handle = function (args) {
    if(!!args && args.length >= 1){
        if(!!awardMap[args[0]]){
            award =  "Visit "+awardMap[args[0]]+" to start earning cashback!";
            return award;
        } else{
            throw new Error("Domain not Found: " + args[0])
        }
    } else{
        throw new Error("Domain missing")
    }
};

/*
Description to be displayed in help
 */
exports.description = function (args) {
    return "Direct user to visit corresponding websites";
};