function jjk_char(){
    console.log("Megumi");
    console.log("Fushiguro");
}
jjk_char()

function addTwoNum(num1, num2){
    console.log(num1 + num2);
}

function addTwoNum_1(num1, num2){
    // let result = num1 + num2;
    // return result ; // lines written after return statement inside a function will not be executed
    // console.log("This function returns sum of two numbers")
    return num1 + num2;
} 

const result = addTwoNum_1(10 , 3)
console.log(result)

function userLogin(username){ // --> checking  condition using if - else
    if(!username){
        console.log("Please enter your username.")
    }
    else{
        return `${username} just logged in.`;
    }
}

console.log(userLogin())
console.log(userLogin("Ekta"))

function userLogin_1(username = "Someone"){
    return `${username} just logged in.`
}

console.log(userLogin_1())
console.log(userLogin_1("Ekta"))