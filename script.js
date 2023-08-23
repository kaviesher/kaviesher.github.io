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



// Calculater
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById("result");
    var sign = document.getElementById("calc-sign").value;

    if (!isNaN(num1) && !isNaN(num2)) {
        switch(sign) {
            case "add":
                result.value = num1 + num2;
                break;
            case "sub":
                result.value = num1 - num2;
                break;
            case "mul":
                result.value = num1 * num2;
                break;
            case "div":
                result.value = num1 / num2;
                break;
        }
    } else {
        result.value = "Error :(";
    }
}

function clearInputs() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var result = document.getElementById("result");

    num1.value = "";
    num2.value = "";
    result.value = "";
}

function swapInputs() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var result = document.getElementById("result");
    var temp;

    temp = num1.value;
    num1.value = num2.value;
    num2.value = temp;
    result.value = "";
}




// Dark Mode
function darkMode() {
    // BG Elements
    var mainBg = document.getElementById('home-styles');
    var scrollBg = document.querySelectorAll('#home-styles-second');
    var scrollBgClassName;
    scrollBg.forEach(function(element) {
        scrollBgClassName = element.className;
    });
    
    // Page Topics
    var pageTopics = document.querySelectorAll("#page-topic");

    if (mainBg.className == "home-styles") {
        // BG Change
        mainBg.classList.toggle("home-styles");
        mainBg.classList.toggle("home-styles-dark");
        scrollBg.forEach(function(element) {
            element.classList.toggle("home-styles-second");
            element.classList.toggle("home-styles-second-dark");
        });
        // Page Topic Font Change
        pageTopics.forEach(function(element) {
            element.classList.toggle("page-topic-light");
            element.classList.toggle("page-topic-dark");
        });
    }
    else if (mainBg.className == "home-styles-dark") {
        // BG Change
        mainBg.classList.toggle("home-styles-dark");
        mainBg.classList.toggle("home-styles");
        scrollBg.forEach(function(element) {
            element.classList.toggle("home-styles-second-dark");
            element.classList.toggle("home-styles-second");
        });
        // Page Topic Font Change
        pageTopics.forEach(function(element) {
            element.classList.toggle("page-topic-dark");
            element.classList.toggle("page-topic-light");
        });
    }
}