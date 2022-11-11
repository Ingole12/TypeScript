const array1=['J&J','Pfizer','Sputnik'];
console.log(array1);
array1.push('Covaxin');
console.log(`---After adding element---`);
console.log(array1);
console.log(`--Traversing Array---`);
for (const iterator of array1) {
    console.log(iterator);
}
console.log(`---Array Destructuring---`);
let[first, second, third,fourth]=array1;
console.log(`${first} ${second} ${third} ${fourth}`);






