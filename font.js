var font_details = [
    {"title": "Roboto", "name":"Christian Robertson", "link": "Roboto"},
    {"title": "Bebas Neue", "name":"Ryoichi Tsunekawa", "link": "Bebas+Neue"},
    {"title": "Solway", "name":"Mariya V. Pigoulevskaya", "link": "Solway"},
    {"title": "Open Sans", "name":"Steve Matteson", "link":"Open+Sans"},
    {"title": "Lato", "name":"Lukasz Dziedzic", "link":"Lato"},
    {"title": "Gupter", "name":"Octavio Pardo", "link":"Gupter"}, 
    {"title": "Montserrat", "name":"Julieta Ulanovsky", "link":"Montserrat"}, 
    {"title": "Lora", "name":"Cyreal", "link":"Lora"},
    {"title": "Muli", "name":"Vernon Adams", "link":"Muli"}, 
    {"title": "Oxygen", "name":"Vernon Adams", "link":"Oxygen"}
];

var fontSizeList = ["20px", "24px", "32px", "40px", "60px"];

function createcard(title, name, setFontFamily){
    var newcard = document.createElement("div");
    newcard.setAttribute("class", "card"); 
    var title_container = document.createElement("div"); 
    title_container.setAttribute("style", 
        "display:flex; justify-content: space-between;");
    title_container.style.fontFamily = setFontFamily;
    newcard.appendChild(title_container); 
    var font_title = document.createElement("div");
    font_title.innerText = title; 
    font_title.setAttribute("class", "font_title"); 
    var icon_div = document.createElement("div"); 
    var icon = document.createElement("i"); 
    icon.setAttribute("class", "far fa-plus-circle"); 
    icon_div.appendChild(icon); 
    title_container.appendChild(font_title, icon_div); 
    var font_author = document.createElement("div"); 
    font_author.innerText = name; 
    font_author.setAttribute("class", "font_author"); 
    newcard.appendChild(font_author);
    var font_text = document.createElement("div"); 
    font_text.innerText ="Then came the first night of the falling star."; 
    font_text.style.fontFamily = setFontFamily;
    font_text.setAttribute("class", "font_text"); 
    newcard.appendChild(font_text); 
    return newcard; 
}

function change_theme(color){
    var reverseColor; 
    if(color === "white"){
        reverseColor = "black"; 
    } else {
        reverseColor = "white"; 
    }

    document.getElementsByTagName("html")[0].setAttribute("style", "background-color: " + color + ";");
    document.getElementById("list_button").setAttribute("style", "color: " + reverseColor + ";");
    document.getElementById("reset_button").setAttribute("style", "color: " + reverseColor + ";");
    document.getElementById("search_field").setAttribute("style", "background-color: " + color + ";"); 
    document.getElementById("sample_text").style.color = reverseColor;
    document.getElementById("sample_text").style.backgroundColor = color;
    var font_titles = document.getElementsByClassName("font_title"); 
    var font_texts = document.getElementsByClassName("font_text");
    for(var i = 0; i < font_titles.length; i++){
        font_titles[i].style.color = reverseColor;
        font_texts[i].style.color = reverseColor;
    }
}

function setFontTextSize(){
    var selectFontSize = document.getElementById("fontSizes"); 
    var size = selectFontSize.options[selectFontSize.selectedIndex].value; 
    var fontTexts = document.getElementsByClassName("font_text"); 
    for(var i = 0; i < fontTexts.length; i++){ 
        fontTexts[i].style.fontSize = size; 
    }
}

function setFontText(inputString){
    var fontTexts = document.getElementsByClassName("font_text"); 
    for(var i = 0; i < fontTexts.length; i++){ 
        fontTexts[i].innerText = inputString; 
    }
}
    
function fadeInElement(element){
    var op = 0.1; 
    element.style.display = "block"; 
    var timer = setInterval(function (){
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        //element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 2);
}

function filterFonts(inputString){
    var card_container = document.getElementById("cards");
    var cards = document.getElementsByClassName("card");
    // hide card_container initially 
    card_container.style.display = "none"; 

    // If inputString is empty, display all cards
    if (inputString === ""){
        for(var i = 0; i < cards.length; i++){
            cards[i].style.display = "block"; 
        }
        fadeInElement(card_container);
        return;
    }

    inputString = inputString.toLowerCase(); 
    for(var i = 0; i < cards.length; i++){
        // get the title 
        var title = (cards[i].getElementsByClassName("font_title"))[0]
        // convert title to lowercase 
        var titleText = title.innerText.toLowerCase(); 
        // check if startsWith
        if(titleText.startsWith(inputString)){
            cards[i].style.display = "block"; 
        } else {
            cards[i].style.display = "none"; 
        }
    }
    fadeInElement(card_container);
}

function init(){
    var cards = document.getElementById("cards");
    var fontUrl = font_details[0].link;   
    var newlink = document.createElement("link");
    for(var i = 0; i < font_details.length; i++){
        var new_title = font_details[i].title;
        var author = font_details[i].name; 
        if(i != 0){
            fontUrl = fontUrl.concat( "|", font_details[i].link);
        }
        cards.appendChild(createcard(new_title, author, new_title));
    }
    newlink.rel = "stylesheet"; 
    newlink.href = "https://fonts.googleapis.com/css?family=" + fontUrl + "&display=swap";
    document.getElementsByTagName("head")[0].appendChild(newlink);   
    var selectFontSize = document.getElementById("fontSizes"); 
    for(var i = 0; i < fontSizeList.length; i++){
        var newOption = document.createElement("option"); 
        newOption.value = fontSizeList[i]; 
        newOption.innerText = fontSizeList[i];
        selectFontSize.appendChild(newOption);
    }
    setFontTextSize();
}

window.onload = init; 
