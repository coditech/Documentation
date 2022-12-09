document.querySelector("#buttn").addEventListener("click", function () {
    if (confirm("Are you sure u want to reset?")) {
      document.querySelector("#name").value = "";
      document.querySelector("#city").value = "";
      document.querySelector("#surname").value = "";
    }
  });