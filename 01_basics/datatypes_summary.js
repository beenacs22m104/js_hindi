//primitive datatypes
//string, Boolean , Number , Null , undefined , symbol , Bigint
  

// const score=Symbol(188)
// const scoreid=Symbol(188)
// console.log(score===scoreid);

//reference types-non primitive 
//array , objects , functions
// const heroes = ["shaktiman","dogo","powwer"]
// const obj={
//     name: "beena",
//      age : 18
// }
// const myfunction=function()
// {
//     console.log("hello world");
// }
//*******************************stack-primitive , heap-reference ************************* */
// let username="beena@iitdotcom";
// let username2=username;
// username2="sanjay@ok"
// console.log(username);
// console.log(username2);
let user1={
    email:"beena@ok",
    age:18
}
let user2=user1;
user2.email="sanjay@ok";
console.log(user1.email);
console.log(user2.email);