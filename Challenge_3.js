function FirstReverse(str) { 
   let characters = new Array();
   characters = str.split(""); 
  reversedCharacter = characters.reverse(); 
  string = reversedCharacter.join("");
   
  // code goes here 
  return string; 

}

// keep this function call here 
console.log(FirstReverse(readline()));

//https://www.coderbyte.com/editor/First%20Reverse:JavaScript 
