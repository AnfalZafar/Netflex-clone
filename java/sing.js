function login(){

  let rgm = document.getElementById("email").value;
  let rpas = document.getElementById("pass").value;
   
  localStorage.setItem("Mail" , rgm);
  localStorage.setItem("Password" , rpas);


}