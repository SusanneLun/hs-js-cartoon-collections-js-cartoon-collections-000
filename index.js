
function dwarfRollCall(dwarves) {
var array2 = [];
for (let i = dwarves.length/2; i < dwarves.length; i++) {
array2.push(`${i+1}. ${dwarves[i]} `);
}

return array2.join("");

//return array2.toString();

}


function summonCaptainPlanet(planeteerCalls) {
 var array3 = [];
<<<<<<< HEAD
 var i;
 for (i = 0; i < planeteerCalls.length; i++) {
=======
 for (let i = 0; i < planeteerCalls.length; i++) {
>>>>>>> d1d2fd2b814a86f528b1669db03ad356c59bdacf
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
  var cheese1 = ["cheddar", "gouda", "camembert", "vegan"]
<<<<<<< HEAD
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
=======
  for (let i = 0; i < foods.length; i++) {
  if (foods.includes("cheddar", "gouda", "camembert")) 
    return `foods[] ==== cheese1[]`;
}
>>>>>>> d1d2fd2b814a86f528b1669db03ad356c59bdacf
}

function wordsWithB(words) {
  array4 = []
  var i;
  for (i=0; i<words.length; i++) {
    if (words[i][0] === 'b') {
      array4.push(words[i]); 
    }
  }
  return array4
} 