
// This allows the inputs to be sotred in an array
let getBtn = document.getElementById('first-name');
getBtn.onClick = function () {
    getTheData();
}

function getTheData() {
    let name = document.getElementsByClassName("name");
    let teamMembers = new Array();

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



    let newBtn = document.createElement("BUTTON"); // Create a <button> element
    newBtn.textContent = "Ready to pick your team?";


    let divWthBtn = document.getElementById("makeTheTeam");
    divWthBtn.append(newBtn);


    divWthBtn.onClick = function () {
        let randomItems = teamMembers[Math.floor(Math.random() * teamMembers.length)];
        document.textContent = randomItems;
        //has to display somewhere..
    }
}

