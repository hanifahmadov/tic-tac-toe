/* eslint-disable */


let arr = [1,2,3,4,5,6,7,8,9];

const loop = (arr) => {

    for(let val of arr){
        for(let val of arr){
            for(let val of arr){
                if (val == 1){
                    console.log("val::", val)
                    return;
                }
            }
        }
    }

    console.log('loop endeded')

}

loop(arr);