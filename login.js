let Username = document.getElementById("username");
let Password = document.getElementById("password");
let signIn = document.getElementById("signIn");

let getUserName = localStorage.getItem("Username")
let getPassword = localStorage.getItem("Password")

signIn.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (Username.value === "" || Password.value === "") {
    alert("من فضلك ادخل معلوماتك");
  } else {
    if((getUserName && getUserName === Username.value.trim()) && (getPassword && getPassword === Password.value)  ){
      alert("تم التسجيل بنجاح  وجاري تحويلك")

       setTimeout(() => {
        window.location = "index.html"
    }, 2000);
    } else{
      alert("اسم المستخدم او كلمه السر خطأ | او ليس لديك حساب")
    }
   
  }
  
});

