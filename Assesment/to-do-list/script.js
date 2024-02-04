
function addtext() {

    //    stroring data in variables

        let a = document.getElementById("inputtext").value
        let b = document.createElement("p");     // create paragrap
        let c = document.createTextNode(a);      // create text by user input 

        let d = 0;

    // give condition

        if (d == 0) {
            b.appendChild(c);       // create paragrap and append text in paragrap

            document.getElementById("todolist").appendChild(b); 
            document.getElementById("todolist").style.backgroundColor="white"

            d = 1
        } else {
            alert("input data is must")
        }

        document.getElementById("inputtext").value = ""
    }