var employee = {
    Id: 1001,
    Dept: "IT",
    Salary: 27000,
    Company: 'IBM'
};
console.log("---------Assignment- Object Destructuring---------");
console.log(employee);
console.log("---Object Traversing---");
for (var key in employee) {
    var one = employee[key];
    console.log(one);
}
var e_id = employee.Id, e_dept = employee.Dept, e_salary = employee.Salary, e_company = employee.Company;
console.log("---Object Destructuring---");
console.log("ID:".concat(e_id, " Dept:").concat(e_dept, " Salary:").concat(e_salary, " Company:").concat(e_company));
