var emp = {
    name: "Dnyanesh",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstname = std.firstName, userLastName = std.lastName;
console.log(userFirstname);
console.log(userLastName);
//optional parameter
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");
var one = [
    'hi',
    'Santosh',
    [1,
        2,
        3,
        4,
        {
            name: 'Sachin',
            age: 40,
            city: 'LA'
        }
    ]
];
for (var index1 = 0; index1 < one.length; index1++) {
    var element = one[index1];
    console.log(element);
}
for (var index2 = 0; index2 < one[2].length; index2++) {
    var element = one[2][index2];
    console.log(element);
}
var two = {
    address: string
};
two.address = "Rahul";
console.log(address);
