/* eslint-disable */


let arr = [1,2,3,4,5,6,7,8,9];

const loop = (xyz) => {
    for(let i = 0; i < 5; i++){
        xyz.pop();
    }

    console.log('xyz::', xyz)
}

loop([...arr]);

console.log('arrr', arr)