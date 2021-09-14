var fail = 0;
var success = 0;
			
var play = function(choice) {
	document.getElementById("user").innerHTML="";
	document.getElementById("computer").innerHTML="";
	document.getElementById("result").innerHTML="";
		
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
		document.getElementById("user").innerHTML='You chose' + ' ' + choice + '.';
    }
    else {
	    document.getElementById("user").innerHTML="That is not a valid choice, try again.";
		return false;
    }
    var compChoice = Math.random();
	if (compChoice < 0.34) {
		compChoice = "rock";
    } 
    else if (compChoice <= 0.67) {
		compChoice = "paper";
    } 
    else {
		compChoice = "scissors";
    }
    
	document.getElementById("computer").innerHTML='// Computer chose' + ' ' + compChoice + '.';
	var compare = function (choice1, choice2) {
        if (choice1 == choice2) {
            return "It's a tie!";
        } 
        else if (choice1 == "rock") {
            if (choice2 =="scissors") {
                success++;
                return "Rock is the winner - rock on!";
            } 
            else {
                fail++;
                return "Sorry computer wins.";
            }
        } 
        else if (choice1 == "paper") {
            if (choice2 == "rock") {
                success++;
                return "You win!";
            } 
            else {
                fail++;
                return "Sorry, computer wins.";
            }
        } 
        else if (choice1 == "scissors") {
            if (choice2 == "rock") {
                fail++;
                return "Computer rocks on, sorry.";
            } 
            else {
                success++;
                return "You win!";
            }
        }
        else {
            return "Error. Game over.";
        }
	};

	var winner = compare(choice, compChoice);
	document.getElementById("result").innerHTML = winner;
	document.getElementById("success").innerHTML = success;
	document.getElementById("fail").innerHTML = fail;
					
	if (success > 99 || fail > 99) {
		document.getElementById("success").style.fontSize="44";
		document.getElementById("fail").style.fontSize="44";
	}
	if (success > 999) {
		alert("You reached maximum score of 999. Stop playing already.");
	}
	if (fail > 999) {
		alert("Computer reached maximum score of 999. Stop playing already.");
	}
};

var reset = function() {
	fail = 0;
	success = 0;
	document.getElementById("success").innerHTML = success;
	document.getElementById("fail").innerHTML = fail;
};