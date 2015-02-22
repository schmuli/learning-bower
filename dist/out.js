"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var A = function A(name) {
    _classCallCheck(this, A);

    this.name = name;
};

var BranchController = (function (A) {
    function BranchController() {
        _classCallCheck(this, BranchController);
    }

    _inherits(BranchController, A);

    return BranchController;
})(A);

angular.module("srLearningBower", []).service("Branches", function () {}).controller("BranchController", function (branches) {}).config(function () {
    console.log("running some configuration...");
});