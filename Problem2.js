//Problem 2
function CountVowel(string){
    let output=0;

    for(let i=0;i<string.length;i++){
       let char =string[i].toUpperCase();

       if(char ==='A'|| char ==='E' || char ==='I' ||
        char ==='O' || char ==='U'

       )
       output=output+1;

        
    }
    return output;
}

console.log(CountVowel("Programming"));