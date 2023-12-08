let Username = document.getElementById("username");
let Email = document.getElementById("email");
let Password = document.getElementById("password");
let signUp = document.getElementById("signUp");

signUp.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (Username.value === "" || Email.value === "" || Password.value === "") {
    alert("من فضلك ادخل معلوماتك");
  } else {
    localStorage.setItem(`Username`, Username.value);
    localStorage.setItem(`Email`, Email.value);
    localStorage.setItem(`Password`, Password.value);
    setTimeout(() => {
        window.location = "login.html"
    }, 2000);
  }
  
});
