// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var cardLength = cardNumber.length;
  var prefix1 = Number(cardNumber.slice(0,1));
  var prefix2 = Number(cardNumber.slice(0,2));
  var prefix3 = Number(cardNumber.slice(0,3));
  var prefix4 = Number(cardNumber.slice(0,4));
  var prefix6 = Number(cardNumber.slice(0,6));


  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if((prefix2 === 38 || prefix2 === 39) && (cardLength === 14)){
    return "Diner\'s Club";
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  else if((prefix2 === 34 || prefix2 === 37) && (cardLength === 15)){
    return "American Express";
  }

  // Reordered Switch before Visa. Since it will pick up the unique 4 digit prefix first, then it can move on to find any other 4 digit prefix
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  else if((prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix4 === 6333 || prefix4 === 6759 || prefix6 === 564182 || prefix6 === 633110) && (cardLength >= 16 && cardLength <= 19)){
    return "Switch";
  }

  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  else if((prefix1 === 4) && (cardLength === 13 || cardLength === 16 || cardLength === 19)){
    return "Visa";
  }

  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  else if((prefix2 === 51 || prefix2 === 52 || prefix2 === 53 || prefix2 === 54 || prefix2 === 55) && (cardLength === 16)){
    return "MasterCard";
  }

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  else if((prefix4 === 6011 || (prefix3 >= 644 && prefix3 <= 649) || prefix2 === 65) && (cardLength === 16 || cardLength === 19)){
    return "Discover";
  }

  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  else if((prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) && (cardLength >= 12 && cardLength <= 19)){
    return "Maestro";
  }

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  else if((prefix6 >= 622126 &&  prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288) && (cardLength >= 16 && cardLength <= 19)){
    return "China UnionPay";
  }

  // To Catch all other instances
  else{
    return "Invalid Card"
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

// Manual Tests
// console.log(detectNetwork("38345678901234")); // Diner's Club
// console.log(detectNetwork("39345678901234")); // Diner's Club
// console.log(detectNetwork("343456789012345")); // American Express
// console.log(detectNetwork("373456789012345")); // American Express
// console.log(detectNetwork("4123456789012")); // Visa
// console.log(detectNetwork("4123456789012345")); // Visa
// console.log(detectNetwork("4123456789012345678")); // Visa
// console.log(detectNetwork("5112345678901234")); // MasterCard
// console.log(detectNetwork("5212345678901234")); // MasterCard
// console.log(detectNetwork("5312345678901234")); // MasterCard
// console.log(detectNetwork("5412345678901234")); // MasterCard
// console.log(detectNetwork("5512345678901234")); // MasterCard




// Heads up! Switch and Visa seem to have some overlapping card numbers -
// in any apparent conflict, you should choose the network with the longer prefix
