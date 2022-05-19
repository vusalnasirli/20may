"use strict"

let fileUpload = document.querySelector("#file-upload");
let imageContainer = document.querySelector("#image-container");


document.addEventListener("click", function (e){
    if (e.target.getAttribute("class").includes("wrapper")) {
        e.target.parentNode.remove()
    }
})

fileUpload.addEventListener("change", function (e) {
    
    let uploadedFiles = e.target.files;

    for (const file of uploadedFiles) {
        let reader = new FileReader();
        reader.onloadend = (e) => {
            let img = document.createElement("img");
            img.setAttribute("src", e.target.result);
            imageContainer.append(img);
        }
        reader.readAsDataURL(file)
    }
})