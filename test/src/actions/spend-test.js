/**
 * Created by z001v3f on 5/13/17.
 */

'use strict';
var spend = require('../../../src/actions/spend');
const assert = require('assert');
const chai = require('chai');


describe('Test spend', function() {

    it('Test spend with undefined args', function () {
        chai.expect(() => spend.handle()).to.throw('Enter at least one amount spent');
    });

    it('Test spend with wrong args', function () {
        chai.expect(() => spend.handle(["No Domain"])).to.throw('Enter only numbers for spent amount');
    });

    it('Test spend with args 0 spent cash', function () {
        assert.equal(spend.handle(["0"]),"No cashback");
    });

    it('Test spend with 15% award', function () {
        assert.equal(spend.handle(["20"]),"Award cashback: 3.00");
    });

    it('Test spend with 5% award', function () {
        assert.equal(spend.handle(["100", "5"]),"Award cashback: 5.00");
    });

    it('Test spend with 10% award', function () {
        assert.equal(spend.handle(["10", "10", "10"]),"Award cashback: 1.00");
    });

    it('Test spend with 10% award', function () {
        assert.equal(spend.handle(["20", "10", "15"]),"Award cashback: 2.00");
    });

    it('Test spend with 20% award', function () {
        assert.equal(spend.handle(["100", "120", "150"]),"Award cashback: 30.00");
    });
});