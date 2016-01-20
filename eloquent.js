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

//