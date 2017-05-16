/**
 * Created by Manjeer on 5/13/17.
 *  This is implementation of spend command
 */


/*
Following map's meaning: <If all amount are above this> : <Award cashback is this much % of maximum>
 */

var speedr = require('speedr')
var awardMap = new speedr.Map({
    50: 20,
    10 : 10,
    20:15,
    0: 5
}, true);

/*
Handle method gets all CLI arguments and return result
 */
exports.handle = function (args) {


    if(!args || args.length == 0){
        throw new Error("Enter at least one amount spent")
    }

        var list = awardMap.keys.sort(function (a, b) {
            return b - a
        });
        var max = 0;
        var percentage = 20;
        var argIndex = 0;
        list.forEach(function (element) {
            for (; argIndex < args.length; argIndex++) {
                var int = parseInt(args[argIndex])
                if(isNaN(int)){
                    throw new Error("Enter only numbers for spent amount")
                }
                if (int > max) {
                    max = int;
                }
                if (int < element) {
                    return;
                } else {
                    percentage = awardMap.get(element);
                }
            }
        });
    var cash_back = (max*(percentage/100));
    if(cash_back <= 0){
        return("No cashback")
    }
    return("Award cashback: "+ cash_back.toFixed(2))
};



/*
 Description to be displayed in help
 */
exports.description = function (args) {
    return "Return cashback awarded rounded to 2 decimal places";
};