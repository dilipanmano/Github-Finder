class Github {
    constructor() {
        this.client_id = "581d02dc662abe7fc919";
        this.client_secret = "3344ec0c0cc1a924bb5d9ccb4e77974a0160d1b9";
        this.per_page = 5;
        this.sort = "created : asc";
    }

    async getProfile(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profileResponseRepos = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.per_page}&sort=${this.sort}client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profileData = await profileResponse.json();
        const profileRepos = await profileResponseRepos.json();

        return {
            profileData,
            profileRepos,
        };
    }
}
