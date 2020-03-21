var x = prompt("How many characters would you like your password to be? (8-120): ");
var charLength = parseInt(x);
console.log(charLength);

var upBool = confirm("Would you like to use uppercase letters in your password?: ");
console.log(upBool);

var lowBool = confirm("Would you like to use lowercase letters in your password?: ");
console.log(lowBool);

var numBool = confirm("Would you like to use numbers in your password?: ");
console.log(numBool);

var specBool = confirm("Would you like to use special characters in your password?: ");
console.log(specBool);

var charPossibilities = 0;
if(upBool===true){
    charPossibilities++;
}
if(lowBool===true){
    charPossibilities++;
}
if(numBool===true){
    charPossibilities++;
}
if(specBool===true){
    charPossibilities++;
}

var passGen = {
    
    lowerSelect: function (){
        if(lowBool===true){
            var letterIndex = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var letterSelector = Math.floor(Math.random()*26);
            var randomLetter = letterIndex[letterSelector];
            return randomLetter;
        }
        
    },

    upperSelect: function (){
        if(upBool===true){
            var letterIndex = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            var letterSelector = Math.floor(Math.random()*26);
            var randomLetter = letterIndex[letterSelector];
            return randomLetter.toUpperCase();
        }
    
    },

    numberSelect: function(){
        if(numBool===true){
            var randomNumber = Math.floor(Math.random()*10);
            return randomNumber;
        }
    },

    specialSelect: function(){
        if(specBool===true){
            var specIndex = ["!","#","$","%","&","*"];
            var specSelector = Math.floor(Math.random()*6);
            var randomSpec = specIndex[specSelector];
            return randomSpec;
        }
    }

}
var genElement=document.querySelector(".btn");
genElement.addEventListener("click",function(event){
    event.preventDefault();
    var passArray=[];
    if(charLength>=8 && charLength<=120){
        for(var j=0;j<charLength;j++){
            var y = 0;
            var charIndex=[];

            if(lowBool===true){
                charIndex[y]=passGen.lowerSelect();
                y++;
            }
            if(upBool===true){
                charIndex[y]=passGen.upperSelect();
                y++;
            }
            if(numBool===true){
                charIndex[y]=passGen.numberSelect();
                y++
            }
            if(specBool===true){
                charIndex[y]=passGen.specialSelect();
            }

        var charSelector = Math.floor(Math.random()*charPossibilities);
        passArray[j]=charIndex[charSelector];
        }
    document.getElementById("password-text").textContent = passArray.join("");
    }
    else{
        document.getElementById("password-text").textContent ="Please refresh and select a password length between 8 and 120 characters";
    }
})



