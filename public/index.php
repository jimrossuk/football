<?php
?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>5 A Side</title>
            <script src="scripts.js"></script>
            <link rel="stylesheet" type ="text/css" href = "style.css">
            <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
        </head>
        <body>
            <html>
                <div class = "container">
                    <div class="mainTextSection">
                        <div class="title">
                        <h1 class= "mainHeadlineNum">5 </h1>
                        <h1 class= "mainHeadline">A Side! </h1>
                        </div>
                        <div class="mainText">    
                            <h3>Football team picker</h3>
                            <h4>This is an app where you and your mates can organise teams based on a randomly generated computer model. This will leave you to  concentrate on the match and not on who is on whos team!</h4>
                            <h5>Lets play!</h5>
                            <p class="mainText">Type in your team members names please</p>
                        </div>
                    </div>
                    <div class="inputNames">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                        <input  type="text" id="firstName" class="name">
                    </div>

                    
                    <button onclick= submit() >Submit</button>

                    <div>
                        <ul  id="showTeamMembers">
                            
                        </ul>
                    </div>

                    <div id ="displayTheTeam">
                    </div>
                    <div class="teamDisplay">

                        <div id ="aTeam">
                           
                        </div>
                        
                        <div id= "bTeam">
                            
                            </div>
                    </div>
                    

                </div>
            </html>
        </body>
<?php








