/**
 * This is the main programmatic entry point for D0.
 */

import Log from "./Util";
import {isArray} from "util";
import {error} from "util";
var rp = require("request-promise-native");
var options = {
    uri: '',


};

interface IMath {
    add(urls: string[]): Promise<number>;
    multiply(urls: string[]): Promise<number> ;

}

function returnNumbers(value: any): Boolean {
    var arrayOk = true;
    var isNumber = true;
   for (let val of value) {
       Log.trace("returnNumbers val: " + val);
       if (isNaN(val)) {
           arrayOk = false;
       }

   }

   if (isNaN(value)) {
       Log.trace("value: is NaN: " + value);
       isNumber = false;
   } else {

   }

   if (arrayOk || isNumber) {
       return true;
   } else {
       return false;
   }



}

function extractNumbers(value: any): Number[] {
    return null;
}
function isSingleNumbers(value: any): Boolean {
    if (isNaN(value)) {
        return false;
    } else {
        return true;
    }
}

// function addHelper(Url: string): number {
//
// }
export default class Math implements IMath {
    constructor() {
        Log.trace('Math::init()');
    }




    add(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement

            if (urls.length == 0) {

                fulfill(0);
            }
            var GrandTotal:number = null;

            options.uri = urls[0];
            // var returnVal = addHelper(urls[0])

            // fulfill(returnVal);
            for (link of urls) {
                options.uri = link;
            }

            rp (options)
                .then(function (repos) {
                    var total:number = null;

                    var data = JSON.parse(repos);




                    if (Object.keys(data).length == 0) {
                        fulfill(0);
                    }


                    //Check if Array are single numbers
                    var isAllNumbers = true;
                    for (let p of Object.values(data)) {
                        if (isSingleNumbers(p)) {
                            total += p;
                        } else {
                            isAllNumbers = false;
                        }

                    }

                    if (isAllNumbers == false) {
                        total = null;
                        for (let val of Object.values(data)) {
                            Log.trace("val in Object.values(data): " + val);


                            let bool = returnNumbers(val);
                            if (bool) {
                                for (let num of val) {
                                    Log.trace("num: " +  num);
                                    total += num;
                                }
                            }


                        }
                    }
                    if (isNaN(total) || total == null) {
                        reject(total);
                    } else {
                        fulfill(total);
                    }



                })
                .catch (function (err) {

                    reject(err);
                });
            //fulfill(0);

        });
    }



    multiply(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            fulfill(0)
        });
    }
}
