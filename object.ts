var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}

var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);

//optional parameter
function display(id:number, name:string, role?:string) 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    
}

display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");



const one=[
    'hi',
    'Santosh',
    [1,
        2,
        3,
        4,
     {
          name:'Sachin',
           age:40,
           city:'LA'
      }
    ]
]
console.log(one[2][0][4]);

// for (let index1 = 0; index1 < one.length; index1++) {
//     const element = one[index1];
//     console.log(element); 
// }
// for (let index2 = 0; index2 < one[2].length; index2++) {
//     const element = one[2][index2];
//     console.log(element); 
// }


