//Problem 1
function reversestring(string){
    let reversedstring ="";

    
    for(let i=string.length-1;i>=0;i--){
        reversedstring=reversedstring+string[i];


    }
    return reversedstring;
}

console.log(reversestring("Hello"));