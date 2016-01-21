// Ex. 1 - Minimum

// Your code here.
var min = function(num1, num2){
    if(num1 > num2){
        return num2;
    }
    else if(num1 < num2){
        return num1;
    }
    else{
      console.log("both numbers are equal");  
    }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// Ex. 2 Recursive

function isEven(number){
    if(number < 0){
        number = Math.abs(number); //converts negative to positive
    }
    if(number === 0){ //even
        return true;
    }
    else if(number === 1){ //odd
        return false;
    }
    else{
        return isEven(number-2); //'number'has 2 subtracted from it until it reaches 1 or 0 where it can return boolean of true or false. 
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));