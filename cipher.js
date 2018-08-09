// function rot13(str) {
//     str = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     var result = [];
    
//     // Loop over the str
//     for (var i = 0; i < str.length; i += 1) {
//         var strChar = str[i];
    
//         // Check if the char is a letter or not
//         var inclLetter = alphabet.includes(strChar);
        
//         // If strChar is not a letter push to the result array unaltered
//         if (!inclLetter) {
//           result.push(strChar);
          
//           // This will skip the current step in the loop
//           continue;
//         }
        
//         // Check if the strChar is below or above 25
//         var shift = 13;
//         var num = alphabet.indexOf(strChar);
        
//         // If num is less than 13 add 13; if num is 13 or more subtract 13
//         if (num < 13) {
//           shift = num + shift;
//         } else if (num >= 13) {
//           shift = num - shift;
//         }
        
//         result.push(alphabet[shift]);
//     }
//     console.log(result.join('').toUpperCase());
// }

// OR

function rot13(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  var result = [];
  
  // Loop over the str
  for (var i = 0; i < str.length; i += 1) {
      var strChar = str[i];
  
      // Check if the strChar is below or above 25
      var shift = 13;
      
      // indexOf method return -1 if char is not in array
      var num = alphabet.indexOf(strChar);
      
      // If num is less than 13 add 13; if num is 13 or more subtract 13
      if (num === -1) {
        result.push(strChar);
        
        // This will skip the current step in the loop
        continue;
      } else if (num < 13) {
        shift = num + shift;
      } else if (num >= 13) {
        shift = num - shift;
      }
      
      result.push(alphabet[shift]);
  }
  console.log(result.join(''));
}

// FREE PIZZA!
rot13('SERR CVMMN!');
// THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');