/* eslint-disable */
 
let[ a, b, c ]= [5, 10, false]


let f = (a, b, c, d) => {

    console.log('a:::', a)
    console.log('b:::', b)
    console.log('c:::', c += 20)
}

f(a, b, c ? true : '') 