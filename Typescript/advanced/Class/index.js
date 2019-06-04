var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ts = /** @class */ (function () {
    function Ts() {
        this.state = 1;
        this.name = 'Mr.Martin';
        this.age = 25;
        this.gendor = 'male';
    }
    Ts.person = 'Mr.Martin';
    return Ts;
}());
var tsc = new Ts();
// console.log(tsc.age);
console.log(tsc.gendor);
// console.log(tsc.name);
var TsChildren = /** @class */ (function (_super) {
    __extends(TsChildren, _super);
    function TsChildren() {
        var _this = _super.call(this) || this;
        console.log(_this.age);
        return _this;
    }
    return TsChildren;
}(Ts));
