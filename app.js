//init github object
const github = new Github;

//init UI object
const ui = new UI;



//Get searchInput
const searchUser = document.getElementById('searchUser');

//Search input eventListener with keyup
searchUser.addEventListener('keyup', (e)=>{
    //get the user input
    const userInput = e.target.value;

    if(userInput !== ''){
        //make http call
        github.getUser(userInput)
        .then(data=>{
            //check if the username exist....if..else
            //if not show alter
            //else show profile
            if(data.profile.message === 'Not Found'){
                //show alter
               
                console.log("--------in if----------");
                ui.clearProfile();
                ui.showAlter('User not Found!', 'alert alert-danger');
                
                
            }else{
                console.log(data.profile);
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }

        })
        
    }else{
        //clear the profile when you enter something new
        ui.clearProfile();
    }


    
})
    