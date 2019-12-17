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
    title_container.setAttribute("style", "display:flex; justify-content: space-between;");
    title_container.style.fontFamily = setFontFamily;
    newcard.appendChild(title_container); 
    var font_title = document.createElement("div");
    font_title.innerText = title; 
    font_title.setAttribute("class", "font_title"); 
    var icon_div = document.createElement("div"); 
    var icon = document.createElement("i"); 
    icon.setAttribute("class", "fas fa-plus-circle"); 
    icon_div.appendChild(icon); 
    title_container.appendChild(font_title);
    title_container.appendChild(icon_div); 
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
    document.getElementById("grid_button").setAttribute("style", "color: " + reverseColor + ";");
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
    document.getElementsByTagName('footer')[0].style.color = reverseColor;
}

function setFontTextSize(size){
    var fontTexts = document.getElementsByClassName("font_text"); 
    for(var i = 0; i < fontTexts.length; i++){ 
        fontTexts[i].style.fontSize = size; 
    }
}

function setFontText(inputString){
    if(inputString === ""){
        inputString = "Then came the first night of the falling star."
    }
    var fontTexts = document.getElementsByClassName("font_text"); 
    for(var i = 0; i < fontTexts.length; i++){ 
        fontTexts[i].innerText = inputString; 
    }
}
    
function fadeInElement(element){
    var op = 0.1; 
    element.style.display = "flex"; 
    var timer = setInterval(function (){
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
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

function setCardWidth(){
    var card_container = document.getElementById("cards");
    var cards = document.getElementsByClassName("card"); 
    let container_width = window.getComputedStyle(card_container).getPropertyValue("width");
    var grid = document.getElementById("grid_button");
    let grid_display = window.getComputedStyle(grid).getPropertyValue("display");
    let card_width = ''; 
    // currently in list display
    if(grid_display != "none"){
        for(var i = 0; i < cards.length; i++){
            card_width = "100%"; 
        }
    } else {        
        if(window.innerWidth <= this.screen.width * 0.4){
            card_width = "100%";
        } else if(window.innerWidth > this.screen.width * 0.4 && window.innerWidth <= this.screen.width * 0.5){
            card_width = (parseInt(container_width) - (2 * 20)) / 2; 
        } else if(window.innerWidth > this.screen.width * 0.5 && window.innerWidth <= this.screen.width * 0.75){
            card_width = (parseInt(container_width) - (3 * 20)) / 3; 
        } else if(window.innerWidth > this.screen.width * 0.75 && window.innerWidth <= this.screen.width){
            card_width = (parseInt(container_width) - 80) / 4; 
        }
    }

    for(var i = 0; i < cards.length; i++){
        cards[i].style.width = card_width; 
    }
}


function widthChangeLayout(){
    let navlinks = document.getElementById("navlinks");
    let header = document.getElementsByTagName("header")[0]; 
    if(window.innerWidth <= this.screen.width * 0.4){
        navlinks.style.fontSize = "0.7em"; 
        header.style.display = "block";
        navlinks.style.marginTop = "5px";
    } else {
        navlinks.style.fontSize = "0.9em"; 
        header.style.display = "flex";
        navlinks.style.margin = "auto 0px";
    }

    if(window.innerWidth <= this.screen.width * 0.4){
        document.getElementById("sample_text").style.display = "none";
        document.getElementById("fontSizes").style.display = "none"; 
        document.getElementById("color_change").style.display = "none";
        document.getElementById("card_display").style.display = "none";
        document.getElementById("search_field").style.width = "50%";
        document.getElementById("reset_button").style.width = "50%";
        
    } else {
        document.getElementById("sample_text").style.display = "block";
        document.getElementById("fontSizes").style.display = "block"; 
        document.getElementById("color_change").style.display = "flex";
        document.getElementById("card_display").style.display = "flex"; 
        document.getElementById("search_field").style.width = "30%";
        document.getElementById("reset_button").style.width = "10%";
    }
    this.setCardWidth();
}

function toggleCardDisplay(){
    var grid = document.getElementById("grid_button");
    var list = document.getElementById("list_button");
    let grid_display = window.getComputedStyle(grid).getPropertyValue("display");
    let list_display = window.getComputedStyle(list).getPropertyValue("display");
    if (grid_display == "none"){        
        grid.style.display = "block"; 
        list.style.display = "none";
        setCardWidth();
        
    } else if (list_display == "none"){          
        grid.style.display = "none"; 
        list.style.display = "block"; 
        setCardWidth();
    }
}

function resetAll(){
    setFontText("");
    document.getElementById("sample_text").value = ""; 
    filterFonts(""); 
    document.getElementById("search_field").value = ""; 
    document.getElementById("grid_button").style.display = "none"; 
    document.getElementById("list_button").style.display = "block"; 
    setCardWidth();
    change_theme("white");
    setFontTextSize("20px"); 
    document.getElementById("fontSizes").value = "20px";  
}

function scrollBack(){
    var op = -1; 
    var timer = setInterval(function (){
        if (window.pageYOffset <= 0){
            clearInterval(timer);
        }
        window.scrollBy(0, op);
        op += op--;
    }, 15);
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
    setFontText("Then came the first night of the falling star.");
    setCardWidth();
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
    widthChangeLayout();
}


window.onload = init; 
window.onresize = widthChangeLayout;
window.onscroll = function () {
    let arrow_button = document.getElementById("arrow_button"); 
    let separator = document.getElementsByClassName("separator")[0];
    sep_position = separator.getBoundingClientRect().bottom;
    if (sep_position > 0){
        arrow_button.style.display = "none"; 
    } else {
        arrow_button.style.display = "block"; 
    }
};
