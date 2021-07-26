console.log("Happy JS :)");

let submitBtn = document.getElementById("submitBtn");
let ui = new UI();

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.querySelector("#name").value;
  ui.clearAlert();

  if (input != "") {
    fetch(`https://api.github.com/users/${input}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.message == "Not Found") {
        } else {
          ui.clearProfile();
          ui.showProfile(data);
        }
      });
    // fetch(`https://api.github.com/users/${input}/repos`)
    //   .then((data) => data.json())
    //   .then((data) => {
    //     data.forEach((repo) => {
    //       ui.clearProfile();
    //       ui.createRepo(repo);
    //     });
    //   });
  } else {
    ui.clearAlert();
    ui.clearProfile();
    ui.showAlert("Please insert a corrent username", "error");
  }
});
