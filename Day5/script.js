// function display(){
//     alert("Hello JS")
// }
// function display(){
//         console.log("Hello JS");
//     }
// display();
// let x=12;
// function display(){
//     console.log(typeof x);
// }
// let arr=[12,2,3,2,4];
// console.log(typeof arr)
// let z=true;
// let obj={
//     'name':'Rahul',
//     id:12,
// }
// let a;
// let b=null;
// console.log(typeof b);
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(password=="admin" && username=="admin"){
        document.getElementById("res").innerHTML="Login Success";
        }
        else{
            document.getElementById("res").innerHTML="Login Failed";
        }
}