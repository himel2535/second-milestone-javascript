let sentence="I am learning Programming to become a programmer"
let words=sentence.split(" ");
function longestWord(words){
    let long=[0];
    for (word of words){
        if(word.length>long.length){
            long=word;
        }
    }
    return long;
}
const result=longestWord(words);
console.log(result);



// word=sentence.split(" ")
// console.log(word)