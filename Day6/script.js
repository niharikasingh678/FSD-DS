// let arr=[1,23,3,3,33,1,8,65,66,74]
// let newary=arr.map((x)=>x*2);
// console.log(newary)
// let even=arr.filter(x=>x%2==0);
// console.log(even);
// let sum=arr.reduce((x,y)=>x+y,0)
// console.log(sum)
let arr=[1,2,3,4,5]
let sum=arr.filter(x=>x%2==0).reduce((x,y)=>x+y,0)
console.log(sum)
