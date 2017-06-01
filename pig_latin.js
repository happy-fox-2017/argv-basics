'use strict'

let index = process.argv.slice(2);

function pigLatin(word) {
  let pigLatin = [];
  for (let i = 0 ; i < word.length ; i++){
    if (/^[aiueo]/.test(word[i])){
        pigLatin.push(word[i]);
    }else {
      pigLatin.push(word[i].replace(/([^aiueo]+)([a-zA-Z0-9]+)/, '$2$1ay'));
    }
  }
  return pigLatin.join(' ');
}

// Your CLI code here
console.log(pigLatin(index));