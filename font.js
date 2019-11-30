// Features to add: 
// 1. Shrink nav buttons when screen shrink 
// 2. Card filter with font search Bar
// 3. Replace text with custom text 
// 4. font-size of card text
// 5. black/white switch 
// 6. list display vs grid display 
// 7. Reset to original state 

var font_details = [
    {"title": "Roboto", "name":"Christian Robertson"},
    {"title": "Bebas Neue", "name":"Ryoichi Tsunekawa"},
    {"title": "Solway", "name":"Mariya V. Pigoulevskaya"},
    {"title": "Open Sans", "name":"Steve Matteson"},
    {"title": "Lato", "name":"Lukasz Dziedzic"},
    {"title": "Gupter", "name":"Octavio Pardo"}, 
    {"title": "Monsterrat", "name":"Julieta Ulanovsky"}
]

function createcard(title, name){
    var newcard = document.createElement("div");
    newcard.setAttribute("class", "card"); 
    var title_container = document.createElement("div"); 
    title_container.setAttribute("style", 
        "display:flex; justify-content: space-between;");
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
    font_author.style.fontSize = "0.8em"; 
    font_author.
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
    var card_texts = document.getElementsByClassName("card_text");
    for(var i = 0; i < font_titles.length; i++){
        font_titles[i].style.color = reverseColor;
        card_texts[i].style.color = reverseColor;
    }

    
    
}


window.onload = function(){
    // add font links 
    // create and append font cards 
    var cards = document.getElementById("cards"); 
    for(var i = 0; i < this.font_details.length; i++){
        cards.appendChild(this.createcard("Roboto", "someone!!!"));
    }
    
}
