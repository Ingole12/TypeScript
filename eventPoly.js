var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer() {
    }
    Organizer.prototype.display = function () {
    };
    Organizer.prototype.show = function (id, name) {
        this.id = id;
        this.name = name;
        console.log(" Organizer Id:".concat(this.id, "\n Organizer Name:").concat(this.name));
        console.log("----------------------------------");
    };
    return Organizer;
}());
var Event1 = /** @class */ (function (_super) {
    __extends(Event1, _super);
    function Event1(id, name, description, Starttime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.Starttime = Starttime;
        return _this;
    }
    Event1.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Event Id : ".concat(this.id, "\n Event Name: ").concat(this.name, "\n Event Description: ").concat(this.description, "\n Event Starttime: ").concat(this.Starttime));
        console.log("---------------------------------");
    };
    return Event1;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Venue Id : ".concat(this.id, "\n Venue Name: ").concat(this.name, "\n Venue Description: ").concat(this.description, "\n Venue Address: ").concat(this.address));
    };
    return Venue;
}(Organizer));
var objshow = new Organizer();
objshow.show(10, "Raj");
var org = new Array(new Event1(20, "Seminar", "Trading Seminar", "19 Nov 2022"), new Venue(30, "SAS Halls", "R.A.Puram", "Pune"));
for (var _i = 0, org_1 = org; _i < org_1.length; _i++) {
    var no = org_1[_i];
    no.display();
}
