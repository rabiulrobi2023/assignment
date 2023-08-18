document.getElementById('button1').addEventListener('click',function(){
   let inputField = document.getElementById("email-input");
   let inputEmail = inputField.value;
  
   let passwordField =  document.getElementById("passowrd-input");
   let password =  passwordField.value;
  
   if(inputEmail==="sbl@gmail.com" && password == 1234){
    alert("Login Successfully");
    window.location.href= "dashbord.html"
   }

   else{
    alert("Incorrect Email or Pin");
   }
   inputField.value = "";
   passwordField.value =  "";

})