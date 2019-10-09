var outerWear = "T-Shirt";

function myOutfit() {
  
  var outerWear = "sweater"; // the local variable takes precedence over the global
  
  return outerWear;
}

myOutfit();
