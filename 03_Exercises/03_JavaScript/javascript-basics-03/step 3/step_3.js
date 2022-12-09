
const btn = document.querySelectorAll('.color');
const text = document.getElementById("text");

btn.forEach(function (p) {
  console.log("PPPP", p)
  p.addEventListener('click', function () {
    if (p.className === "color green") {
      text.style.color = "green";
    }
    else if (p.className === "color red") {
      text.style.color = "red";

    }
    else if (p.className === "color blue") {
      text.style.color = "blue";
    }
  })
})
