
function addtext() {

    //    stroring data in variables

        let a = document.getElementById("inputtext").value
        let b = document.createElement("p");     // create paragrap
        let c = document.createTextNode(a);      // create text by user input 

       

    // give condition

        if (a!="") {
            b.appendChild(c);       // create paragrap and append text in paragrap

            document.getElementById("todolist").appendChild(b); 
            document.getElementById("todolist").style.backgroundColor="white"

            
        } else {
            alert("input data is must")
        }

        document.getElementById("inputtext").value = ""
    }