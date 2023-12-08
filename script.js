const Dark = document.getElementById("dark");
const B = document.getElementById("b");
Dark.addEventListener("click", (eo) => {
  B.classList.toggle("bg");
});

let user = document.getElementById("user");
let logout = document.getElementById("logout");
let info = document.querySelector(".user_info");
let Links = document.querySelector(".links");

let usernames = localStorage.getItem("Username");
if (usernames) {
  Links.remove();
  info.style.display = "flex";
  user.innerHTML = localStorage.getItem("Username");
}
logout.addEventListener("click", (e) => {
  localStorage.clear();
  setTimeout(() => {
    window.location = "index.html";
  }, 2000);
});


let Products = [
  {
    id: 1,
    title: "HP ELITEBOOK",
    size: "large",
    iamgeUrl: "img/1.png"
  },
  {
    id: 2,
    title: "HP ELITEBOOK",
    size: "small",
    iamgeUrl: "img/2.jpg"
  },
  {
    id: 3,
    title: "HP ELITEBOOK",
    size: "large",
    iamgeUrl: "img/3.jpg"
  },
  {
    id: 4,
    title: "HP ELITEBOOK",
    size: "large",
    iamgeUrl: "img/4.jpeg"
  },
  {
    id: 5,
    title: "HP ELITEBOOK",
    size: "large",
    iamgeUrl: "img/5.jpg"
  },
  {
    id: 6,
    title: "HP ELITEBOOK",
    size: "large",
    iamgeUrl: "img/6.jpg"
  },

]