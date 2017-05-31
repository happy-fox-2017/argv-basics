'use strict'

let argv = process.argv.slice(2)

function pigLatin(arrSentence) {
  // Your pig latin implementation here...
  //let arrSentence = sentence.split(" ");
  let arrPiglatin = [];
  for (let i = 0 ; i < arrSentence.length ; i++){
    if (/^[aiueo]/.test(arrSentence[i])){
        arrPiglatin.push(arrSentence[i]);
    }else {
      arrPiglatin.push(arrSentence[i].replace(/([^aiueo]+)([a-zA-Z0-9]+)/, '$2$1ay'));
    }
  }
  return arrPiglatin.join(" ");
}

console.log(pigLatin(argv))
// Your CLI code here
