/*
Author: Emmanuel Chinwendu Amadi
 */

/* A function for display */
function dis(x) {
    document.getElementById("result").value += x
}
/* clear function*/
function clr(){
    document.getElementById("result").value= " "
}
/* function that calculates the input*/
function equal(){
    let x=document.getElementById("result").value
    let y=eval(x)
    document.getElementById("result").value= y
}

/**function for square root for the input */
function solve(){
    let i= document.getElementById("result").value
    let j= Math.sqrt(i)
    document.getElementById("result").value= j
}
;