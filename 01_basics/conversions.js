let score="33"
console.log(typeof score);
let varint=Number(score)

console.log(typeof varint)
//"33"-33
//"33abc"-NaN
//undefined-NaN
//null-0
//true-1,false-0
//""-false
//"beens"-true
//---------------------------operations-------------------------//
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)//power
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
//if string defined first all converted to string else according to previous values
console.log(+true);
console.log(+"");
let age=100
console.log(++age);