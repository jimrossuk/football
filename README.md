Hello and Welcome to 5 A Side Football picker

The Brief:

The exercise is to create a tool which randomly picks 5-a-side football teams from a list of 10 names (10 players = 2 teams of 5).


To start the app, 

In the command line:

git clone git@github.com:jimrossuk/football.git

Once all are installed.

npm start



Technology:

I chose to write the brief in HTML5 SCC3 and JavaScript as it would be simple solution. If the app were to be implemented into an WordPress CMS, it would be a fast way of implementing the technology
 I really enjoy working with it would be simple to add to it. It suites my logic too.


How I picked the teams


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



What I would like to improve

There are lots I would like to change and I will when I get back to this app. Ideally I would like to have the inputs present themselves after the name has been imputed.
I would also like to add an imput for the user to add a team name and an option to send out the teams by email.








# Scotch Box

## [GET SCOTCH BOX PRO](https://box.scotch.io/pro)

## [TUTORIAL](https://box.scotch.io)

Just a Dead-Simple Local LAMP/LEMP Stack for Vagrant. **Making Vagrant EASY AS EATING CAKE for developers.**

![Scotch Box](https://box.scotch.io/img/pro-banner.png)

Scotch Box is a pre-configured Vagrant Box with a full array of features to get you up and running with Vagrant in no time.


## Scotch Box 3.5!

3.5 is finally here!

* Ubuntu 16.04!
* PHP 7!
* MySQL 5.7!
* NGNIX Option!
* Go lang in the box
* PHPUnit in the box
* Yarn
* Improved email catching with MailHog
* Vagrant Share working nicely finally
* The box's build scripts
* Customize your own boxes in minutes
* Generally higher versions of things (Node.js, Ruby, etc.)!


## License Required?!!!!?!

Still MIT License for the free version. The free version is still a beast.

Pro will help support the project, let you customize some things a bit more, and will help this project survive. If you're super pissed about this, in school, working for good causes, or hurting for cash, then email me at nick@scotch.io so I can get you setup with Pro no charge.

"Scotch Box Pro" is a paid version of the original Scotch Box. [Go Pro Now!](https://box.scotch.io/pro)


## Pro Features

* NEW OS: **Ubuntu-17.10!**
* NEW PHP: **PHP 7.2!**
* NEW APACHE: 2.4.29
* NEW NGINX: 1.13.8
* NEW RUBY via RVM: 2.5.0
* NEW NODE via NVM: 8.9.4
* NEW BUILD SCRIPTS
* Fixes a MongoDB and PHP bug
* **Makes Laravel routing finally work out of the box with NGINX version**
* Adds Drush (Launcher) even though you should do this through Composer these days
* Updated WP-CLI version
* Generally WAY higher versions of everything else

![Scotch Box](https://box.scotch.io/img/terminal.png)

## Documentation

* Check out the official docs at: [box.scotch.io](https://box.scotch.io)
* [Read the getting started article](https://scotch.io/bar-talk/introducing-scotch-box-a-vagrant-lamp-stack-that-just-works)
* [Read the 2.0 release article](https://scotch.io/bar-talk/announcing-scotch-box-2-0-our-dead-simple-vagrant-lamp-stack-improved)
* [Read the 2.5 release article](https://scotch.io/bar-talk/announcing-scotch-box-2-5)
* [Read the 3.0 release article](https://scotch.io/bar-talk/announcing-scotch-box-30-and-scotch-box-pro)
* [Read the 3.5 release article](https://scotch.io/bar-talk/announcing-scotch-box-v35-and-scotch-box-pro-v15-the-big-switcheroo)



## WPDistillery

![WPDistillery Logo](http://files.flurinduerst.ch/wpdistillery/wpdistillery_bright.png)

WPDistillery is an amazing tool by [Flurin Dürst](https://twitter.com/flurinduerst) that kickstarts your WordPress installation on Scotch Box. It is actively maintained, has lots of features and gets you started in less than 5 minutes.

All you have to do is clone the repo, customize the configuration file to your needs, and <b>vagrant up</b>. WPDistillery will do the rest:

![WPDistillery Preview](http://files.flurinduerst.ch/wpdistillery/wpdistillery_terminal_small.png)

To get started, visit [wpdistillery.org](https://wpdistillery.org) or check out the [Documentation](https://github.com/flurinduerst/WPDistillery).


## More Information

Check-out [box.scotch.io](https://box.scotch.io) to learn more.




## Special Thank You

Thanks to anyone who has supported this project.

I was dark on this project for a little bit too long, as I got caught up with work and a million other things. I apologize for slowness to release updates. I'm hoping the Pro version can create a bit more motivation to dedicate time to this. I also finally have the build scripts available for download with the Pro version so you all can start addressing bugs yourselves with your own personalized boxes.

Thanks to the community for bug fixes and provisioning tips. Special shout-out to [@maxpou](https://github.com/maxpou) for completely killing it with community responses. 
