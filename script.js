function add(){
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;
    //var num3=document.getElementById("third").value;
    //var num4=document.getElementById("fourth").value;
    var result= parseInt(number1) + parseInt(number2) ;
   console.log(result);
   document.getElementsByClassName("output")[0].innerHTML="Addition is "+ result;
}

function sub(){
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;
    //var num3=document.getElementById("third").value;
    //var num4=document.getElementById("fourth").value;
    var result= parseInt(number1) - parseInt(number2) ;
   console.log(result);
   document.getElementsByClassName("output")[0].innerHTML="Substraction is "+ result;
}

function mul(){
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;
    //var num3=document.getElementById("third").value;
    //var num4=document.getElementById("fourth").value;
    var result= parseInt(number1) * parseInt(number2) ;
   console.log(result);
   document.getElementsByClassName("output")[0].innerHTML="Multipication is "+ result;
}

function div(){
    var number1 = document.getElementById("first").value;
    var number2 = document.getElementById("second").value;
    //var num3=document.getElementById("third").value;
    //var num4=document.getElementById("fourth").value;
    var result= parseInt(number1) / parseInt(number2) ;
   console.log(result);
   document.getElementsByClassName("output")[0].innerHTML="Division is "+ result;
}