var numberofCount=parseInt(prompt("how many numbers u will enter"));
var array=[];
for(let i=0;i<numberofCount;i++){
    var a=parseInt(prompt("Enter number:"));
    array.push(a);
   
}
var evenarray=[];
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        evenarray.push(array[i]);
    }
}
console.log(evenarray);