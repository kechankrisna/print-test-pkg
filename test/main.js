const _t = require("../index");
var assert = require("assert");

exports.run = (function () {
    var f = _t.printTestNew();

    assert.strictEqual(f, undefined);

    assert.strictEqual(1, 1);
})();
