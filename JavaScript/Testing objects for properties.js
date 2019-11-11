var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];

  } else if (myObj.hasOwnProperty(checkProp) !== true) {
    return "Not Found";
  } 
  
   return "Change me!"
}
  
checkObj("gift");
checkObj("pet");
checkObj("house");
