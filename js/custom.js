// document.getElementById("btnJoin").addEventListener("click", function(){
//     Join();
// })

document.getElementById("btnJoin").addEventListener("click", Join);
document.getElementById("btnSort").addEventListener("click", SortAscending);
document.getElementById("btnSortDesc").addEventListener("click", SortDescending);
document.getElementById("btnSwitch").addEventListener("click", DOWSwitch);


function DOWSwitch(){
    let day;
    // let DaysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // document.getElementById("outputCard7").innerText = DaysOfWeek[new Date().getDay()]
            
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
      default:
        day = "Unknown";
    }
    
    document.getElementById("outputCard7").innerText = `Today is ${day}`;      
}


function SortAscending(){
    let array = [40, 100, 1, 5, 25, 10];
    document.getElementById("outputCard5").innerText = 
        array.sort(function(a, b){return a - b}).join(" < ");
}

function SortDescending(){
    let array = [40, 100, 1, 5, 25, 10];
    document.getElementById("outputCard6").innerText = 
        array.sort(function(a, b){return b - a}).join(" > ");
}


function Join()
{
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let fruits = new Array();
    // fruits.push("Banana");
    // fruits.push("Orange");
    // fruits.push("Apple");
    // fruits.push("Mango");

    // document.getElementById("outputCard1").innerHTML = fruits.join(" --> ");
    document.getElementById("outputCard1").innerHTML = fruits;

}

function Reverse(){

    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let reverseFruits = fruits.reverse();
    document.getElementById("outputCard2").innerHTML = reverseFruits.join(" * ");
  //document.getElementById("outputCard1").innerHTML = fruits;



}

function ReverseUsingSplitAndJoin(){
    let word = "Hello";       
    //Step 1: Split the word Hello into an Array --> word.split('') = ['H','e','l','l','o'] 
    //Step 2: Reverse the array --> ['o','l','l','e','H']
    //Step 3: Joinm the reversed array without a join character --> "olleH"
    document.getElementById("outputCard3").innerText = 
        word.split('').reverse().join('');
}

function Sort(){
    let array = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("outputCard4").innerText = array.sort();
}
