/* eslint-disable */

let a = new Array(5).fill(null);

let f = (arr) => {
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;
};

f(a);

let newArr = a;

console.log(newArr)
