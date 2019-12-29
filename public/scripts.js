let teamMembers
function getTheData() {
    let name = document.getElementsByClassName("name");
    teamMembers = new Array();

    for (i in name) {
        //extract the value of input elements
        let singleVal = name[i].value;
        if (singleVal !== "" && singleVal !== undefined) {
            teamMembers.push(singleVal);
        }
    }
    let showVals = document.getElementById('showTeamMembers');

    //Convert to string format to see the output easily 
    let stringFormat = String(teamMembers.join(' '));
    //no comma now  
    showVals.textContent = stringFormat.toUpperCase();
    //all uppercase names

    let divWthBtn = document.getElementById("displayTheTeam");
    divWthBtn.append(newBtn);
}


let newBtn = document.createElement("BUTTON"); // Create a <button> element
newBtn.textContent = "Ready to pick your team? FROM JS";

newBtn.addEventListener('click', () => {


    let x = Math.floor(Math.random() * teamMembers.length);
    console.log(x);
    // This aint working    
})
