let List = document.querySelectorAll(".items button");
List.forEach((List) => {
  List.addEventListener("click", removeActive);
});

function removeActive() {
  List.forEach((List) => {
    List.classList.remove("active");
    this.classList.add("active");
  });
}

let All_Id_Buttons = document.querySelectorAll(
  "#pcc , #lbb, #vww, #cmm, #xx, #all"
);
let All_Id_Cards = document.querySelectorAll(
  "#pc , #lb, #vw, #cm, #x, #all, .cards"
);
all.addEventListener("click", (all) => {
  lb.style.display = "block";
  vw.style.display = "block";
  cm.style.display = "block";
  x.style.display = "block";
  pc.style.display = "block";
});
pcc.addEventListener("click", (pcc) => {
  lb.style.display = "none";
  vw.style.display = "none";
  cm.style.display = "none";
  x.style.display = "none";
  pc.style.display = "block";
});

lbb.addEventListener("click", (lbb) => {
  pc.style.display = "none";
  vw.style.display = "none";
  cm.style.display = "none";
  x.style.display = "none";
  lb.style.display = "block";
});

vww.addEventListener("click", (vww) => {
  lb.style.display = "none";
  pc.style.display = "none";
  cm.style.display = "none";
  x.style.display = "none";
  vw.style.display = "block";
});
cmm.addEventListener("click", (cmm) => {
  lb.style.display = "none";
  pc.style.display = "none";
  vw.style.display = "none";
  x.style.display = "none";
  cm.style.display = "block";
});
xx.addEventListener("click", (xx) => {
  lb.style.display = "none";
  vw.style.display = "none";
  cm.style.display = "none";
  pc.style.display = "none";
  x.style.display = "block";
});
