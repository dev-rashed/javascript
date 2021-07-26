class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  showProfile(data) {
    let profile = this.profile;
    profile.innerHTML = `
    <div class='card py-2 px-1'>
    <div class='row'>
    <div class='col-md-3'>
    <div class='card'>
    <img class='img-fluid' src='${data.avatar_url}'>
    <a target='_blank' class='btn btn-success mt-2' href='${data.html_url}'>View Profile</a>
    </div>
    </div>
    <div class='col-md-9'>
    <button type="button" class="btn btn-success">
        Repository <span class="badge bg-danger">${data.public_repos}</span>
    </button>
    <button type="button" class="btn btn-primary">
        Follower <span class="badge bg-danger">${data.followers}</span>
    </button>
    <button type="button" class="btn btn-danger">
        Following <span class="badge bg-secondary">${data.following}</span>
    </button>
    <h4>Name: <i>${data.name}</i></h4>
    <p>Location: <i>${data.location}</i></p>
    <p>Website: <i>${data.blog}</i></p>
    </div>
    </div>
    </div>`;
  }
  createRepo(data) {
    let profile = this.profile;
    profile.after.innerHTML = `<div class='container my-2'>
    <div class='row'>
    <div class='card'>
        <div class='card-header>
        <button type="button" class="btn btn-success">
            Watched <span class="badge bg-danger">${data.watchers}</span>
        </button>
        <button type="button" class="btn btn-success">
            Forks <span class="badge bg-danger">${data.forks}</span>
        </button>
        <a target='_blank' class='btn btn-primary'>view</a>
        </div
    </div>
    <div class='card-body'>
    <div class='row'>
    <div class='col-md-3'>
    <img class='img-fluid' src=''>
    </div>
    </div>
    </div>
    </div>
    </div>`;
  }
  clearProfile() {
    if (this.profile.hasChildNodes) {
      this.profile.innerHTML = "";
      this.profile.after.innerHTML = "";
    }
  }
  showAlert(message, className) {
    let div = document.createElement("div");
    div.className = `${className} alert`;
    div.setAttribute("role", "alert");
    div.textContent = message;
    let container = document.querySelector("#searchBox");
    let before = document.querySelector("#insertFormBox");
    container.insertBefore(div, before);
  }
  clearAlert() {
    let div = document.querySelector(".alert");
    if (div) {
      div.remove();
    }
  }
}
