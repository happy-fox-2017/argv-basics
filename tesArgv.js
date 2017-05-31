const fs = require('fs');
var myArr = process.argv.slice(2);
console.log('myArgs: ', myArr);
 switch(myArr[0]) {
   case 'insult' :
    console.log('smells quite badly');
    break;
   case 'compliment':
    console.log(myArr[1], 'is really cool');
    break;
   default:
   console.log('Sorry, that is not something I know to do');
 }
