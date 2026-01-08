//Problem 8
function capitalizeWords(str){
    let word = str.split(" ");

    let capital = word.map(word=>{
        return word.charAt(0).toUpperCase()+ word.slice(1)
    })

    return capital.join(" ")
}
console.log(capitalizeWords("hello world"))