//create class
class Github{
    //constructor.....declear client_id, client_secret
    constructor(){
        this.client_id = "5d9fe55c735ed95e284a";
        this.client_secret = "5f6f37f8cc85b64c106fdbcdf7a1979c11f7d003";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';


    }
    //async function to get users information. Including profile and repos
    async getUser(user){
        const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await userProfile.json();

        const repos = await userRepos.json();

        return{
            profile: profile,
            repos: repos
        }
    }
    
}
