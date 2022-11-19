var Student1 = /** @class */ (function () {
    function Student1() {
    }
    Object.defineProperty(Student1.prototype, "name", {
        get: function () {
            return this._userName;
            //format
        },
        set: function (name) {
            if (name == "Codemind") {
                this._userName = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student1.prototype.display = function () {
        console.log(this._userName);
    };
    return Student1;
}());
var objstudent = new Student1();
objstudent.name = "Codemind";
console.log(objstudent.name);
