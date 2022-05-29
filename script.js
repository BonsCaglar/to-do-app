let btnAdd = document.querySelector("#buttonAdd");
let freeContainer = document.querySelector("#listToContainer");
let inputText = document.querySelector("#textName");
let btnClear = document.querySelector("#buttonClear");

btnAdd.addEventListener("click", addfunct)

function addfunct(e) {


    if (textName.value == "") {
        alert("Null values ​​cannot be inserted!")
    } else {
        let newText = document.createElement("li");
        newText.className = "list-group-item list-group-item-secondary mt-2 d-flex justify-content-between";
        newText.innerText = textName.value;

        let a = document.createElement("a");
        a.setAttribute = ("href", "#");
        a.className = "icon";
        a.innerHTML = "<i class='fa-solid fa-xmark'></i>";
        newText.appendChild(a);


        document.querySelector("#listToContainer").appendChild(newText);
        textName.value = "";





        let dlt = document.querySelector("#listToContainer").addEventListener("click", deleteİtem);

        function deleteİtem(e) {

            let item = e.target;

            console.log(e.target);

            if (item.classList[0] === "fa-solid") {

                let todo = item.parentElement.parentElement;
                todo.remove();
            }

        }

        btnClear.addEventListener("click", clear)
        function clear() {
            newText.remove();
        }
    }

    e.preventdefault();


};



