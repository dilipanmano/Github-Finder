const github = new Github();

const userId = document.getElementById("searchUser");

userId.addEventListener("keyup", (e) => {
  if (e.target.value !== "") {
    github.getProfile(e.target.value).then((data) => {
      if (data.profileData.message === "Not Found") {
        // no user found
      } else {
        // display ui profile
      }
    });
  } else {
    //clear prfile
  }
});
