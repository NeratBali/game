"use strict"
// document.querySelector selects the whole line while adding a ".TextContent" after will select only the content of the tag
/* console.log(document.querySelector('.message')) */
// This next line forces the text content of our HTMl element at class message(recall: '.message' the dot shows that this is a class) to be "correct number" no matter what you do.
/* document.querySelector('.message').textContent="Correct Number";
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;
document.querySelector('.guess').value=20 */
const secretNumber=Math.trunc(Math.random()*2)+1;
let score=20;
// This formula makes sure the random number generated stays between 1 and 20
document.querySelector('.check').addEventListener('click',function(
){  
    console.log(secretNumber)
    let guess=Number(document.querySelector('.guess').value)
    if(!guess){
        document.querySelector('.message').textContent='Enter a number'
    }
    else if(guess===secretNumber){
    document.querySelector('.message').textContent='Correct Number!'
    document.querySelector('body').style.backgroundColor='#60b347'
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent=secretNumber
    }
    else if(guess<secretNumber){
            
        if (score>0){
            document.querySelector('.message').textContent='Too High!'
            document.querySelector('.score').textContent=score;
            --score;
        }
        else if(score==0){
            document.querySelector('.message').textContent='Game Over';
            document.querySelector('.score').textContent=score;
        }
    }    
    else if(guess>secretNumber){
            
        if (score>0){
            document.querySelector('.message').textContent='Too High!';
            document.querySelector('.score').textContent=score;
            --score;
        }
        else if(score===0){
            document.querySelector('.message').textContent='Game Over';
            document.querySelector('.score').textContent=score;
        }
    }
    
    // we are converting the value to integer because due to dynamic nature of our HTML, whatever value we catch from it comes to JS as a string, but we want to be able to use our values as numbers
    console.log(guess)
})
// The eventListener listens for events, i.e things that happen in your HTML, so this added event listener listens to the 'click' of the element with class 'check'
