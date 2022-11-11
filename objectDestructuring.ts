const employee={
     Id:1001,
     Dept:"IT",
     Salary:27000,
     Company:'IBM'
}
console.log(`---------Assignment- Object Destructuring---------`);
console.log(employee);
console.log(`---Object Traversing---`);

for (const key in employee) {
   const one=employee[key];
   console.log(one);
   
}

var {Id:e_id ,Dept:e_dept,Salary:e_salary,Company:e_company}=employee;
console.log(`---Object Destructuring---`);
console.log(`ID:${e_id} Dept:${e_dept} Salary:${e_salary} Company:${e_company}`);





