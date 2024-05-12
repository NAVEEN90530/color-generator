function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function generateRandomColors() {
    var numColors = parseInt(document.getElementById("userinput").value);
    var colorContainer = document.getElementById("colorContainer");
    colorContainer.innerHTML = ""; // Clear previous containers

    for (var i = 0; i < numColors; i++) {
        var color = generateRandomColor();
        var colorDiv = document.createElement("div");
        colorDiv.classList.add("color");
        colorDiv.style.backgroundColor = color;
        colorDiv.onclick = function() { copyColor(this.querySelector(".copy-color")); };

        var colorSpan = document.createElement("span");
        colorSpan.classList.add("copy-color");
        colorSpan.innerText = color;

        colorDiv.appendChild(colorSpan);
        colorContainer.appendChild(colorDiv);
    }
}

function copyColor(element) {
    var colorHex = element.innerText;
    var tempInput = document.createElement("input");
    tempInput.value = colorHex;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");

    alert("Color code copied to clipboard: " + tempInput.value);


    document.body.removeChild(tempInput);
    
}

// Initial color generation
generateRandomColors();