let btnAdd = document.querySelector("#buttonAdd");
let freeContainer = document.querySelector("#listToContainer");
let inputText = document.querySelector("#textName");
let btnClear = document.querySelector("#buttonClear");


btnAdd.addEventListener("click", addfunct)

function addfunct() {


    if (textName.value == "") {
        alert("Bir değer giriniz..")
    } else {
        let newText = document.createElement("li");
        newText.className = "list-group-item list-group-item-secondary mt-2";

        let iconBtn = document.createElement("button");
        iconBtn.className = "btn btn-outline-primary float-right ";
        newText.appendChild(iconBtn);

        document.querySelector("#listToContainer").appendChild(newText)
        newText.innerHTML = textName.value;
        textName.value = "";

        console.log(newText);

        btnClear.addEventListener("click", clear)
        function clear() {
            newText.remove();
        }
    }



};