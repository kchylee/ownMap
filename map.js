var words = ["ground", "control", "to", "major", "tom"];

// ownMap = function(array, task){
//  console.log(array.forEach(task));
//  // console.log(array);
//

ownMap = function(array, task){
  var resArr = [];
  array.forEach(function(element){
    resArr.push(task(element))
  });
  return resArr;
}

wordLength = function(element){
  return element.length;
}

console.log(ownMap(words, wordLength));