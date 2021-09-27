
//RECURSIVE FUNCTION
function sumOfANumberWithAllItsPrecedents(number){
    if(number == 1){
        return 1; 
    }else{
        return number + sumOfANumberWithAllItsPrecedents(number - 1); 
    }
}

function sum(a, b){
    return a + b; 
}

function setNumberValue(functionToApply){
    console.log("Entering the function setNumberValue"); 
    let numberLabel = document.getElementById("myNumber");
    let resultLabel = document.getElementById("resultLabel"); 
    console.log("Before reading function to apply. "); 
    resultLabel.innerHTML = functionToApply(Number(numberLabel.value)); 
}