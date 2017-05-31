'use strict'

function pigLatin(sentence) {
  // Your pig latin implementation here...
  let resultArr = []
  let words = sentence.split(" ")
  let regx = /[aiueo]+/
  for (let i = 0; i < words.length; i++) {
    let checkedWord = words[i]
    let checkedWordInfo = checkedWord.match(regx)
    if (checkedWordInfo.index == 0) {
      resultArr.push(checkedWord)
    } else {
      let foundIndex = checkedWordInfo.index
      let modifiedWord = checkedWord.slice(foundIndex) + checkedWord.slice(0,foundIndex) + "ay"
      resultArr.push(modifiedWord)
    }
  }
  let result = resultArr.join(" ")
  return result;
}

let sentence = process.argv.slice(2).join(' ')
console.log(pigLatin(sentence));

// let pigLatin = (word) => {
//   let firstLetter = word.charAt(0);
//   if(isPowel(firstLetter)){
//     return word
//   }else{
//     return `${word.substr(1)}${firstLetter}ay`;
//   }
// }
// 
// let isPowel = (char) => {
//   return (/^[aeiou]$/i).test(char);
// }
// 
// let convert = (sentence) => {
//   let result = []
//   let words = sentence.trim().split(/\s+/g)
//   for (let i=0;i<words.length;i++) {
//     result[i] = pigLatin(words[i])
//   }
// 
//   return result.join(" ")
// }

// Your CLI code here
