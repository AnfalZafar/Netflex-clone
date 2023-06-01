
function home(e) {

    var stroemail = localStorage.getItem("Mail");
    var stropass = localStorage.getItem("Password");

    var email = document.getElementById("email-2").value;
    var pass = document.getElementById("pass-3").value;

    if (email === stroemail && pass === stropass) {

    //     let lo = document.querySelector(".lo"),
    //     button = document.querySelector(".bu"),
    //     form = document.querySelector(".for")

    // lo.addEventListener("click" , (e) =>{
    // e.preventDefault();
    //  form.classList.add("show")
    // });
    // button.addEventListener("click" , (e) =>{
    // e.preventDefault();
    //    form.classList.remove("show")
    //   });

        var email = document.getElementById("email-2").value = "";
        var pass = document.getElementById("pass-3").value = "";
        window.location.assign("index.html");
        alert("Login Succefulley")

    } else {
        alert("Email OR Password Not Match")
    }

}



// let home = document.querySelector(".container"),
// sing = document.querySelector(".sing"),
// login = document.querySelector(".login");


// sing.addEventListener("click" , (e) =>{
//     e.preventDefault();
//     home.classList.add("show")
// })
// login.addEventListener("click" , (e) =>{
//     e.preventDefault();
//     home.classList.remove("show")
// })