let teamMembers;
let shuffledTeam;

function getTheData() {
    let name = document.getElementsByClassName("name");
    teamMembers = new Array();

    let p = document.createElement("p");
    // set the text inside the <p> 
    p.textContent = "These are your players";
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
let newBtn = document.createElement("BUTTON");
newBtn.textContent = "Ready to pick your team? FROM JS";

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

    // let array1 = shuffledTeam.slice(0, Math.ceil(shuffledTeam / 2));
    //let array2 = shuffledTeam;
    let halfwayThrough = Math.floor(shuffledTeam.length / 2)
    // or instead of floor you can use ceil depending on what side gets the extra data

    let array1 = shuffledTeam.slice(0, halfwayThrough);
    let array2 = shuffledTeam.slice(halfwayThrough, shuffledTeam.length);






    let h1a1 = document.createElement('h1');
    let h2a1 = document.createElement('h2');

    let h1a2 = document.createElement('h1');
    let h2a2 = document.createElement('h2');

    h2a1.textContent = array1.join(' ');
    h1a1.textContent = "This is your team!";
    let container = document.getElementById("newTeam");
    container.append(h1a1);
    container.append(h2a1);


    let container2 = document.getElementById("otherTeam");
    h2a2.textContent = array2.join(' ');
    h1a2.textContent = "This is the other team!";
    container2.append(h1a2);
    container2.append(h2a2);

    console.log(container, container2);
    console.log(array2);
})
