document.getElementById("btnSH").addEventListener("click",SunsetHills);
document.getElementById("btnClear").addEventListener("click",Clear);



function SunsetHills(){
    // step 1: get all user data
    let num1 = parseInt(document.getElementById("userInput1").value);
    let num2 = parseInt(document.getElementById("userInput2").value);
    let num3 = parseInt(document.getElementById("userInput3").value);
    let num4 = parseInt(document.getElementById("userInput4").value);
    let num5 = parseInt(document.getElementById("userInput5").value);





    // Step2: turn user datsa into an array
    let userArray = new Array();
        userArray.push(num1);
        userArray.push(num2);
        userArray.push(num3);
        userArray.push(num4);
        userArray.push(num5);
    
// step 3: determin which buidlings san see the sunset
let maxNum = userArray[0];
let ascendingArray  = new Array();
ascendingArray.push(maxNum);


for(let loop=1; loop < userArray.length ; loop++){
    if(userArray[loop] > maxNum){
        maxNum = userArray[loop]
        ascendingArray.push(maxNum);
    }
     
    
}


    // output to id="output"  --innertext or innerHTML
document.getElementById("output").innerText = `The Ascending array is [${ascendingArray.join(', ')}]`;


}

function Clear(){
 document.getElementById("userInput1").value = "";
 document.getElementById("userInput2").value = "";
 document.getElementById("userInput3").value = "";
 document.getElementById("userInput4").value = "";
 document.getElementById("userInput5").value = "";
 document.getElementById("output").innerText = "";

}
