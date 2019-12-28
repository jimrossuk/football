``
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

    showVals.textContent = stringFormat.toUpperCase();

    // showVals.innerHTML = stringFormat;

    console.log(teamMembers.join(' '));
}

