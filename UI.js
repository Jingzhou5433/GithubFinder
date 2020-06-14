//class of UI
class UI{
    // constructor
    constructor(){
        // get the tag of profile
        this.profile = document.getElementById('profile');

    }
    //showProfile(user)
    showProfile(user) {
        //const html = Template.load('/template/profile.html');
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                
            </div>
            <div class="col-md-9">
                <span class="badge badge-secondary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-info">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-warning">Followers: ${user.followers}</span>
                <span class="badge badge-success">Following: ${user.following}</span>
                <br>
                <br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Bolg: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
    </div>
    <h3 class="page-heading mb-3">
        Latest Repos
    </h3>
    <div id="repos"></div>`;
    }

    showRepos(repos){
        let output = ''
        repos.forEach(repo => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-secondary">Star: ${repo.stargazers_count}</span>
                        <span class="badge badge-info">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-warning">Forks: ${repo.forks}</span>
                    </div>
                </div>
            </div>`;
        });
        document.querySelector('#repos').innerHTML = output;

    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlter(msg, className){
        //clear remaining alert
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));

        //const par = div.parentElement
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(this.clearAlert, 2000);
    }
    
    clearAlert(){
        const curr_alert = document.querySelector('.alert');
        if(curr_alert){
            curr_alert.remove();
        }
        
    }
}