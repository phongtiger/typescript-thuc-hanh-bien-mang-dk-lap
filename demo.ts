function square(num: number): number {
    return num * num;
}

console.log(square(5));
// Output: 25
const squareFE = function (num: number): number {
    return num * num;
}
function add(a: number):
    Function {
    return function(b: number): number {
        return a + b;
    }
}
console.log(squareFE(7))
const addWith5 = add(5);
console.log(addWith5)
console.log(addWith5(3))
console.log(addWith5(14))