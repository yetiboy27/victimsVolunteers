var victimTotal = prompt("How many disaster victims are you entering?");
var vicName = [];
var vicPhone = [];
var vicStreet = [];
var victimInfo = function() {	
	var victimNumber = victimTotal * 1;
	for (var i = 0; i < victimNumber; i++) {
		vicName.push(prompt("What is the victims name?"));
		vicPhone.push(prompt("What is their phone number?"));
		vicStreet.push(prompt("What street is their house on?"));			
	}
};
victimInfo();
var volunteerTotal = prompt("How many disaster volunteers are you entering?");
var volName = [];
var volPhone = [];
var volStreet = [];
var volunteerInfo = function() {	
	var volunteerNumber = volunteerTotal * 1;
	for (var i = 0; i < volunteerNumber; i++) {
		volName.push(prompt("What is the volunteers name?"));
		volPhone.push(prompt("What is their phone number?"));
		volStreet.push(prompt("What street is their house on?"));			
	}
};
volunteerInfo();
alert("We have " + victimTotal + " people in need of help.\n We have " + volunteerTotal + " volunteers.\nThe people who need help are " + vicName + ".\nOur volunteers are " + volName + ".");


