let textElement;
let documentBody;
window.onload = function() {
    document.getElementById("changeTextButton")
    .addEventListener("click", function() {
        textElement = document.getElementById("mainText");
        if (textElement !== null) {
            textElement.style.color =
            textElement.style.color == "blue" ? "white" : "blue";
        }
    });

    document.getElementById("bgColorButton")
    .addEventListener("click", function() {
        documentBody = document.body;
        if (documentBody !== null) {
            documentBody.style.backgroundColor = 
            documentBody.style.backgroundColor == "red" ? "yellow" : "red";
        }
    })
}