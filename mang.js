var list = [1, 2, 3];
var categories = ['Sport', 'IT', 'Car'];
console.log('list');
list.forEach(function (num) {
    return console.log(num.toFixed(2));
});
console.log('categries');
categories.forEach(function (str) {
    // @ts-ignore
    return console.log(str.includes('a') ? str : '');
});
var listSquare = list.map(function (num) { return num * num; });
console.log(listSquare);
var result = categories.filter(function (str) { return str.length > 2; });
console.log(result);
var x;
x = ["hello", 10];
