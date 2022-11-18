class Passenger {
    firstName:string;
    lastName:string;
    frequentlyFlyerno:number;
    constructor(firstName: string,lastName:string,frequentlyFlyerno:number)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.frequentlyFlyerno=this.frequentlyFlyerno;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentFlyerno);
    }

}

var passenger = new Passenger("Jack","Sparrow",123);
passenger.display();

console.log(passenger.firstName + " "+ passenger.lastName+" "+ passenger.frequentlyFlyerno);

