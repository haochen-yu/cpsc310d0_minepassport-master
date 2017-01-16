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
        Log.trace("value at isSingleNumbers " + value.toString());
        if (value.toString().indexOf('"') >= 0) {
            return false;
        }
        return true;
    }
}

// function addHelper(Url: string): number {
//
// }

export default class Math implements IMath {
    constructor() {
        Log.trace('Math::init().');

    }




    add(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            var counter:number = 0;
            if (urls.length == 0) {

                fulfill(0);
            }
            var GrandTotal:number = null;

            options.uri = urls[0];
            // var returnVal = addHelper(urls[0])

            // fulfill(returnVal);

            for (let link of urls) {
                Log.trace("link:" + link);
                options.uri = link;

                rp (options)
                    .then(function (repos) {
                        var total:number = null;
                        try {
                            var data = JSON.parse(repos);

                            if (Object.keys(data).length == 0) {
                                GrandTotal += 0;

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
                                Log.trace("total here is : " + total);
                                GrandTotal += 0;
                            } else {
                                GrandTotal += total;
                            }

                        } catch(err) {
                            Log.trace("error caught");
                            //reject(GrandTotal);
                        }





                        Log.trace("grand total: " + GrandTotal);
                        counter ++;
                        Log.trace("counter: " + counter);
                        Log.trace("length:" + urls.length);


                        if (counter == urls.length) {
                            if (GrandTotal == null || isNaN(GrandTotal)) {
                                reject(GrandTotal);
                            }
                            Log.trace("GT: " + GrandTotal);
                            counter = 0;
                            fulfill(GrandTotal);
                        }



                    })
                    .catch (function (err) {

                        GrandTotal += 0
                    });

            }



        });
    }



    multiply(urls: string[]): Promise<number> {
        return new Promise(function (fulfill, reject) {
            // TODO: implement
            var counter:number = 0;
            if (urls.length == 0) {

                fulfill(0);
            }
            var GrandTotal:number = 1;

            options.uri = urls[0];
            // var returnVal = addHelper(urls[0])

            // fulfill(returnVal);

            for (let link of urls) {
                Log.trace("link:" + link);
                options.uri = link;

                rp(options)
                    .then(function (repos) {
                        var total: number = 1;
                        var tester: number = null;
                        try {
                            var data = JSON.parse(repos);


                            if (Object.keys(data).length == 0) {
                                GrandTotal += 0;

                            }


                            //Check if Array are single numbers
                            var isAllNumbers = true;
                            for (let p of Object.values(data)) {
                                Log.trace("p of Object.values(data): " + p)
                                if (isSingleNumbers(p)) {
                                    total *= p;
                                    tester +=p;
                                } else {
                                    isAllNumbers = false;
                                }

                            }

                            if (isAllNumbers == false) {
                                total = 1;
                                for (let val of Object.values(data)) {
                                    Log.trace("val in Object.values(data): " + val);


                                    let bool = returnNumbers(val);
                                    if (bool) {
                                        for (let num of val) {
                                            Log.trace("num: " + num);
                                            total *= num;
                                        }
                                    }


                                }
                            }
                            if (isNaN(tester) || total == 1) {
                                GrandTotal += 0;
                            } else {
                                GrandTotal *= total;
                            }

                        } catch(err) {
                            Log.trace("error caught");
                        }

                        Log.trace("grand total: " + GrandTotal);
                        counter++;
                        Log.trace("counter: " + counter);
                        Log.trace("length:" + urls.length);


                        if (counter == urls.length) {
                            if (total == 1 && GrandTotal == 1) {
                                reject(GrandTotal)
                            }
                            Log.trace("GT: " + GrandTotal);
                            counter = 0;
                            fulfill(GrandTotal);
                        }


                    })
                    .catch(function (err) {

                        GrandTotal += 0
                    });
            }

            });
    }
}
