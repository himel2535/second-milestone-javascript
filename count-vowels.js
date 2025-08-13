const vowels=['a','e','i','o','u'];
const text="mojadarkhabariudee"
function countVowels(vowels){
    let count1=[];
    let count2=0;
    let a=0;
    let e=0;
    let i=0;
    let o=0;
    let u=0;
    for (letter of text){
        for (vowel of vowels){
            if(letter===vowel){
                count1.push(vowel)
                count2++;
                if(letter===vowels[0]){
                    a++;
                }
                else if(letter===vowels[1]){
                    e++;
                }
                else if(letter===vowels[2]){
                    i++;
                }
                else if(letter===vowels[3]){
                    o++;
                }
                else if(letter===vowels[4]){
                    u++;
                }
            }
        }
    }
    // console.log(count.length)
    return {count1,count2,a,e,i,o,u};
}
const result=countVowels(vowels);
console.log(result);
