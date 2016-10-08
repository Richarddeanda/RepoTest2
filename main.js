function java(){
	window.alert("Thank you, your email was succesfully submited!!")
}

 for(var i = 0; i <= 10; i++){ 
  console.log(i);
 }
  
var age = 10;
while(age <= 17){
    console.log('You are ' + age + ' years old!');
age ++
}
console.log('You are legally an adult!');


function playGame(game){
    console.log('Lets play ' + game + '!');
}
for (var i = 0; i < 4; i++){
playGame('uno');
playGame('checkers');
}


function convertTemp (inputTemp,inputUnit){
    var outputTemp;
if(inputUnit === "F"){
    outputTemp =(inputTemp -32)*(5/9);
    console.log("temperture of " + inputTemp + " degrees fahrenheit is equal to " + outputTemp + "degrees in celsius");
}
else if (inputUnit === "C"){
    outputTemp = inputTemp * 9/5 + 32; 
console.log("temperture of " + inputTemp + " degrees fahrenheit is equal to " + outputTemp + "degrees in celsius");
  }
}
convertTemp(212,'C');
convertTemp(32,'C');
convertTemp(65,'C');
convertTemp(-40,'F');
