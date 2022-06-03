window.addEventListener("DOMContentLoaded", function(e){
    let container = document.getElementsByClassName("content-border")[0];
    for (let i = 0; i < 3; i++) {
        let new_container = document.getElementById("content-border").cloneNode;
        new_container.id = "content-border" + (i + 1)
        let new_button = new_container.lastChild
        document.getElementsByClassName("content-container")[0].innerHTML = document.getElementsByClassName("content-container")[0].innerHTML + "<div class='content-border'>" + container.innerHTML + "</div>"
    }
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event){
            let input = buttons[i].previousElementSibling;
            input = document.querySelector("#"+input.getAttribute("id")).value;
            alert(input);
        })
    }
});