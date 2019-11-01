function square(num) {
    return num * num;
}
console.log(square(5));
// Output: 25
var squareFE = function (num) {
    return num * num;
};
function add(a) {
    return function (b) {
        return a + b;
    };
}
console.log(squareFE(7));
var addWith5 = add(5);
console.log(addWith5);
console.log(addWith5(3));
console.log(addWith5(14));
