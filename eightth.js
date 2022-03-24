var stringarray=[];
var countofString=parseInt(prompt("How many words you will enter"));
for(let i=0;i<countofString;i++){
    var element=prompt("Enter word");
    stringarray.push(element);
}
var letters=[];
var word=prompt("Enter a word")
function GetArray(array,word){
  for(let i=0;i<array.length;i++){
      if(array[i][0]==word){
          letters.push(array[i])
      }
  }
return letters;
}
console.log(GetArray(stringarray,word))