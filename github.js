class Github {
    constructor() {
        this.client_id = "";
        this.client_secret = "";
        this.per_page = 5;
        this.sort = "created : asc";
    }

    async getProfile(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}`
        );
        const profileResponseRepos = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.per_page}&sort=${this.sort}`
        );

        const profileData = await profileResponse.json();
        const profileRepos = await profileResponseRepos.json();

        return {
            profileData,
            profileRepos,
        };
    }
}
