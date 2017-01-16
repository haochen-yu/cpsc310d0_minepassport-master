/**
 * Created by rtholmes on 2016-10-31.
 */

import {expect} from 'chai';

import Math from "../src/Math";
import Log from "../src/Util";

describe("MathSpec", function () {

    var math: Math = null;
    beforeEach(function () {
        math = new Math();
    });

    afterEach(function () {
        math = null;
    });

    it("Add should return 0 if no valid arrays are found", function () {
        return math.add([]).then(function (value: number) {
            Log.test('Value: ' + value);
            expect(value).to.equal(0);
        }).catch(function (err) {
            Log.test('Error: ' + err);

            expect.fail();
        })
    });
    it("Add should return -1 for http://skaha.cs.ubc.ca:11313/4543.json", function () {
        return math.add(['http://skaha.cs.ubc.ca:11313/4543.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(-2);

        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Add should return 6 for http://skaha.cs.ubc.ca:11313/7b77.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/7b77.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(6);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Add should return 6 for http://skaha.cs.ubc.ca:11313/2.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/2.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(6);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Add should fail for http://skaha.cs.ubc.ca:11313/4670.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/4670.json']).then(function (err) {
            expect.fail();
        }).catch(function (err) {
            Log.test('Error:' + err);

        })
    });
    it("Add should return 6 for http://skaha.cs.ubc.ca:11313/2.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/2.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(6);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Add should return -4 for http://skaha.cs.ubc.ca:11313/4543.json', 'http://skaha.cs.ubc.ca:11313/4544.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/4543.json', 'http://skaha.cs.ubc.ca:11313/4544.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(-4);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Add should return -2 for http://skaha.cs.ubc.ca:11313/2.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/4670.json', 'http://skaha.cs.ubc.ca:11313/4544.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(-2);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Mult should return 8 for http://skaha.cs.ubc.ca:11313/4543.json", function () {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4543.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(6);

        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });
    it("multi should return -35 for http://skaha.cs.ubc.ca:11313/4670.json', 'http://skaha.cs.ubc.ca:11313/4544.json", function() {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/4670.json', 'http://skaha.cs.ubc.ca:11313/4544.json']).then(function (value: number) {
            Log.test('Value:  ' + value);
            expect(value).to.equal(-35);
        }).catch(function (err) {
            Log.test('Error:' + err);
            expect.fail();
        })
    });
    it("Add should fail for http://skaha.cs.ubc.ca:11313/jdw3.json", function() {
        return math.add(['http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (err) {
            expect.fail();
        }).catch(function (err) {
            Log.test('Error:' + err);

        })
    });
    it("Mult should fail for http://skaha.cs.ubc.ca:11313/jdw3.json", function() {
        return math.multiply(['http://skaha.cs.ubc.ca:11313/jdw3.json']).then(function (err) {
            expect.fail();
        }).catch(function (err) {
            Log.test('Error:' + err);

        })
    });

});
