var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender[1]);
console.log(Gender[0]);
var WeekEnd;
(function (WeekEnd) {
    WeekEnd[WeekEnd["Saturday"] = 6] = "Saturday";
    WeekEnd[WeekEnd["Sunday"] = 7] = "Sunday";
})(WeekEnd || (WeekEnd = {}));
console.log(WeekEnd[6]);
console.log(WeekEnd[7]);
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["down"] = 1] = "down";
    directions[directions["left"] = 2] = "left";
    directions[directions["right"] = 3] = "right";
})(directions || (directions = {}));
console.log(directions.up);
console.log(directions.bottom);
var ClientResponse;
(function (ClientResponse) {
    ClientResponse[ClientResponse["No"] = 0] = "No";
    ClientResponse[ClientResponse["Yes"] = 1] = "Yes";
})(ClientResponse || (ClientResponse = {}));
console.log(ClientResponse[0]);
console.log(ClientResponse[1]);
