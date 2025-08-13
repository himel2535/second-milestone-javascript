let vowels=['a','e','i','o','u'];
let text="mojadarkhabariud"
function countVowels(vowels){
    let count1=[];
    let count2=0;
    for (letter of text){
        for (vowel of vowels){
            if(letter===vowel){
                count1.push(vowel)
                count2++;
            }
        }
    }
    // console.log(count.length)
    return {count1,count2};
}
const result=countVowels(vowels);
console.log(result);
