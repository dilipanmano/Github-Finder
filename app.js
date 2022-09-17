const github = new Github();

const ui = new UI();

const userId = document.getElementById("searchUser");

userId.addEventListener("keyup", (e) => {
    if (e.target.value !== "") {
        github.getProfile(e.target.value).then((data) => {
            if (data.profileData.message === "Not Found") {
                // no user found
            } else {
                // display ui profile
                ui.renderProfile(data.profileData);
            }
        });
    } else {
        //clear prfile
    }
});
