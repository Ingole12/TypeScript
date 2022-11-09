var n1:number=10;
console.log(n1);

var s1:string="You are the creator of your destiny";
var s2:string=`Powerful people come from powerful places`;

console.log(s1,s2);

var b1:boolean=true;
var b2:boolean=false;
var b3:boolean;

function simple():boolean 
{
    return b3=false;
    
}
console.log(simple());


var a1: any = {
    productID: 1,
    ProductName: 'iPhone',
    productPrice: 25000
}

console.log(a1);

// homodenous array 
var arr1 : Array<string> = ['Angular', 'React', 'NodeJS', 'java'];

// heterogenous array 
var arr2 : Array<any> = ['Angular', 123456, true];


console.log(arr2);
