

class Student1 {
   private _userName:string;

   get name():string{
    return this._userName;
    //format
   }
   set name(name:string){
    if(name == "Codemind"){
        this._userName=name;
    }
   }
   display(){
    console.log(this._userName);
   }
}
var objstudent=new Student1();
objstudent.name="Codemind";
console.log(objstudent.name);


