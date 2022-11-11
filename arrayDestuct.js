var array1 = ['J&J', 'Pfizer', 'Sputnik'];
console.log(array1);
array1.push('Covaxin');
console.log("---After adding element---");
console.log(array1);
console.log("--Traversing Array---");
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var iterator = array1_1[_i];
    console.log(iterator);
}
console.log("---Array Destructuring---");
var first = array1[0], second = array1[1], third = array1[2], fourth = array1[3];
console.log("".concat(first, " ").concat(second, " ").concat(third, " ").concat(fourth));
