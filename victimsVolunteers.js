var victimTotal = prompt("How many disaster victims are you entering?");
var victimNumber = victimTotal * 1;
var victims = [];
var victimInfo = function() {
	for (var i = 0; i < victimNumber; i++) {
		var name =	prompt("What is the victim's name?");
		var phone = prompt("What is their phone number?");
		var street = prompt("What street is their house on?");
		var victim = {
			name   : name,
			phone  : phone,
			street : street,
		};
		victims.push(victim);
	}	
};
victimInfo();
var volunteerTotal = prompt("How many disaster volunteers are you entering?");
var volunteerNumber = volunteerTotal * 1;
var volunteers = [];
var volunteerInfo = function() {
	for (var i = 0; i < volunteerNumber; i++) {
		var name =	prompt("What is the volunteer's name?");
		var phone = prompt("What is their phone number?");
		var street = prompt("What street is their house on?");
		var volunteer = {
			name   : name,
			phone  : phone,
			street : street,
		};
		volunteers.push(volunteer);
	}	
};
volunteerInfo();
var victimNames = '';
var victimNamesString = function() {
	for (var i = 0; i < victimNumber; i++) {
		victimNames = victimNames + victims[i].name;
	}
}
victimNamesString();
var volunteerNames = '';
var volunteerNamesString = function() {
	for (var i = 0; i < volunteerNumber; i++) {
		volunteerNames = volunteerNames + volunteers[i].name;
	}
}
volunteerNamesString();

alert("We have " + victimTotal + " people in need of help.\n We have " + volunteerTotal + " volunteers.\nThe people who need help are " + victimNames + ".\nOur volunteers are " + volunteerNames + ".");

var streetmatch = function() {
	for (var i = 0; i < volunteers.length; i++) {
		for (var j=0; j < victims.length; j++) {
			if (volunteers[i].street == victims[j].street) {
				console.log(volunteers[i].name + " can help the victim.");
			}
			// console.log(volunteers[i].street);
			// console.log(victims[j].street);
			// console.log("-------------");

		}
	}
}
streetmatch();


