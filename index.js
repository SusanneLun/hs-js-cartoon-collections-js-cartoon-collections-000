
function dwarfRollCall(dwarves) {
var array2 = [];
for (let i = 0; i < dwarves.length; i++) {
array2.push(`${i+1}. ${dwarves[i]} `);
}
return array2.join("");
}


function summonCaptainPlanet(planeteerCalls) {
 var array3 = [];
 var i;
 for (i = 0; i < planeteerCalls.length; i++) {
   array3.push(planeteerCalls[i].toUpperCase() + '!')
 }
 return array3;
}
 
function longPlaneteerCalls(words) {
  let characters = true;
    if (words.length > 4) {
    return characters;
    }
    else {
      return false;
  }
}

function findTheCheese (foods) {
  var cheese1 = ["cheddar", "gouda", "camembert"]
  var i;
  var j;
  for (i = 0; i < foods.length; i++) {
  for (j = 0; j < cheese1.length; j++) {
  if (cheese1[j] === foods[i]) {
    return foods[i];
}
}
}
  return 'no cheese!'
}