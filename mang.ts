const list: number[] = [1, 2, 3];

const categories: Array<string> =
    ['Sport', 'IT', 'Car'];

console.log('list');
list.forEach((num) =>
    console.log(num.toFixed(2))
);

console.log('categries');

categories.forEach((str) =>
    // @ts-ignore
    console.log(str.includes('a')?str:'')
);

const listSquare = list.map(num => num * num);
console.log(listSquare)

const result = categories.filter(str => str.length > 2)
console.log(result);

let x: [string, number];
x = ["hello", 10];
