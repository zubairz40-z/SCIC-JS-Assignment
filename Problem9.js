//Problem 9
function factorial(n){
    if(n<0){
        return "Factorial not possible"
    }
    let result =1;

    for(let i=2;i<=n;i++){
        result=result*i;
    }
    return result;
}
let num=5
console.log(factorial(num));