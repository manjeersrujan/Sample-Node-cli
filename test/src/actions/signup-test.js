/**
 * Created by z001v3f on 5/13/17.
 */


'use strict';
var signup = require('../../../src/actions/signup');
const chai = require('chai');
const assert = require('assert');


describe('Test signup', function() {

    it('signup with undefined args', function () {
        chai.expect(() => signup.handle()).to.throw('Domain missing');
    });

    it('signup with wrong args', function () {
        chai.expect(() => signup.handle(["No Domain"])).to.throw('Domain not Found: No Domain');
    });

    it('signup with correct args', function () {
        assert.equal(signup.handle(["www.shopback.sg"]),"Award bonus: 5.00 SGD");
    });
});


