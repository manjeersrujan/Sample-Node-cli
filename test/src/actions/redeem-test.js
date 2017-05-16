/**
 * Created by Manjeer on 5/14/17.
 */

'use strict';

var redeem = require('../../../src/actions/redeem');
const assert = require('assert');
const chai = require('chai');


describe('Test redeem', function() {

    it('redeem with undefined args', function () {
        chai.expect(() => redeem.handle()).to.throw('Domain missing');
    });

    it('redeem with wrong args', function () {
        chai.expect(() => redeem.handle(["No Domain"])).to.throw('Domain not Found: No Domain');
    });

    it('redeem with correct args', function () {
        assert.equal(redeem.handle(["www.shopback.sg"]),"Visit https://www.shopback.sg to start earning cashback!");
    });
});