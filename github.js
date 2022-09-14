class Github{
    constructor(){
        this.client_id = '581d02dc662abe7fc919';
        this.client_secret = '3344ec0c0cc1a924bb5d9ccb4e77974a0160d1b9';
    }

    async getProfile(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`);

        const profileData = await profileResponse.json();

        return{
            profileData
        };
    }
}