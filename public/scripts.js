let teamMembers;
let shuffledTeam;

function submit() {
    let name = document.getElementsByClassName("name");
    teamMembers = new Array();


    let p = document.createElement("p");
    // set the text inside the <p> 

    let container = document.getElementById("showTeamMembers");
    // append the new <p> to the container element
    // this adds it to the DOM
    container.append(p);

    for (i in name) {
        //extract the value of input elements
        let singleVal = name[i].value;
        if (singleVal !== "" && singleVal !== undefined) {
            teamMembers.push(singleVal);
        }
    }

    //creates a space for the button to go 
    let divWthBtn = document.getElementById("displayTheTeam");
    divWthBtn.append(newBtn);

}
// Create a <button> element
let newBtn = document.createElement("button");
newBtn.classList.add('newBtn');
newBtn.textContent = "Display Teams";

newBtn.addEventListener('click', () => {


    // this shuffles the items in the array from the text area
    function shuffle() {
        let ctr = teamMembers.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = teamMembers[ctr];
            teamMembers[ctr] = teamMembers[index];
            teamMembers[index] = temp;
        }
        return teamMembers;
    } shuffle();

    let shuffledTeam = teamMembers;

    //this splits the array into two separate arrays
    let halfTeam = Math.floor(shuffledTeam.length / 2);

    let array1 = shuffledTeam.slice(0, halfTeam);
    let array2 = shuffledTeam.slice(halfTeam, shuffledTeam.length);

    let captain1 = array1[0];
    let captain2 = array2[0];
    console.log(captain1, captain2);


    let h1a1 = document.createElement('h1');
    let h2a1 = document.createElement('h2');
    let capt1 = document.createElement('h3');

    let h1a2 = document.createElement('h1');
    let h2a2 = document.createElement('h2');
    let capt2 = document.createElement('h3');

    h2a1.textContent = array1.join('  ');
    h1a1.textContent = "Team One";
    capt1.textContent = "Captain:";


    let container = document.getElementById("aTeam");
    container.append(h1a1);
    container.append(h2a1);
    container.append(capt1);
    container.append(captain1);


    //Displays the team members and Captain

    let container2 = document.getElementById("bTeam");
    h2a2.textContent = array2.join('  ');
    h1a2.textContent = "Team Two";
    capt2.textContent = "Captain:";
    container2.append(h1a2);
    container2.append(h2a2);
    container2.append(capt2);
    container2.append(captain2);
})
