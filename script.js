// BG elements
var mainBg = document.getElementById('home-styles');
mainBg.innerHTML =
'<div class="home-style-1"></div>'+
'<div class="home-style-2" id="round"></div>'+
'<div class="home-style-3"></div>'+
'<div class="home-style-4" id="round"></div>'+
'<div class="home-style-5"></div>'+
'<div class="home-style-6" id="round"></div>'+
'<div class="home-style-7"></div>'+
'<div class="home-style-8"></div>'+
'<div class="home-style-9" id="round"></div>'+
'<div class="home-style-10"></div>'+
'<div class="home-style-11" id="round"></div>'+
'<div class="home-style-12"></div>'+
'<div class="home-style-13" id="round"></div>'+
'<div class="home-style-14" id="grey"></div>'+
'<div class="home-style-15" id="grey"></div>'+
'<div class="home-style-16" id="grey"></div>'+
'<div class="home-style-17" id="grey"></div>'+
'<div class="home-style-18" id="grey"></div>'+
'<div class="home-style-19" id="grey"></div>'+
'<div class="home-style-20" id="grey"></div>'+
'<div class="home-style-21" id="grey"></div>'+
'<div class="home-style-22" id="grey"></div>'+
'<div class="home-style-23" id="grey"></div>';

var scrollBg = document.querySelectorAll('#home-styles-second');
scrollBg.forEach(function(element) {
    element.innerHTML =
    '<div class="home-style-1-s"></div>'+
    '<div class="home-style-2-s"></div>'+
    '<div class="home-style-3-s"></div>'+
    '<div class="home-style-4-s"></div>'+
    '<div class="home-style-5-s"></div>'+
    '<div class="home-style-6-s"></div>'+
    '<div class="home-style-7-s"></div>'+
    '<div class="home-style-8-s"></div>'+
    '<div class="home-style-9-s"></div>'+
    '<div class="home-style-10-s"></div>'+
    '<div class="home-style-11-s"></div>'+
    '<div class="home-style-12-s"></div>'+
    '<div class="home-style-13-s"></div>';
})




// Calculator
function addition() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sign = document.getElementById("calc-sign").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch(sign) {
            case "add":
                var sum = num1 + num2;
                document.getElementById("result").value = sum;
                break;
            case "sub":
                var sum = num1 - num2;
                document.getElementById("result").value = sum;
                break;
            case "mul":
                var sum = num1 * num2;
                document.getElementById("result").value = sum;
                break;
            case "div":
                var sum = num1 / num2;
                document.getElementById("result").value = sum;
                break;
        }
    } else {
        document.getElementById("result").value = "Error :(";
    }
}