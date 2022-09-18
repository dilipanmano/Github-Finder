const github = new Github();

const ui = new UI();

const userId = document.getElementById("searchUser");

userId.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
        github.getProfile(e.target.value).then((data) => {
            if (data.profileData.message === "Not Found") {
                // no user found
                ui.clearAlert();
                ui.showAlert("No Record Found", "alert alert-danger");
            } else {
                // display ui profile
                ui.renderProfile(data.profileData);
                ui.renderRepos(data.profileRepos);
            }
        });
    } else {
        //clear prfile
        ui.clearProfile();
    }
});
