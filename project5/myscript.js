var currentloc=0;
var score=0;
var items = [];
 
function item_proto() {
	this.itemname = "";
	this.itemqty = 0;
}

function init_items() {
	var lighter = new item_proto();
	var duck = new item_proto();
	var pizza = new item_proto();
	var torch = new item_proto();

	lighter.itemname = "Lighter";
	items.push(lighter);

	duck.itemname = "Yellow Rubber Duck";
	items.push(duck);

	pizza.itemname = "Pepperoni Pizza";
	items.push(pizza);

	torch.itemname = "Torch";
	items.push(torch);
}

function init() {
	displaymsg("Find Leo your cat in the living room! You are in the bathroom.");
	init_locations();
	init_items();
}

function displaymsg(message) {
	var target = document.getElementById("tamain");
	target.value = message + "\n\n" + target.value;   
}


function updateScore() {
	var txtpoints = document.getElementById("txt_Points");
	if (location_array[currentloc].locvisited === 0) {
		score += 5;
		txtpoints.value = score;
	}
}
				   

function help(){
	displaymsg("Commands: \n N \n S \n E \n W \n take \n inventory \n HELP")
}


function btn_Enterclick() {
	var vCommand = document.getElementById("txt_Command");
	if (vCommand.value != "") {
		if (vCommand.value === "N" || vCommand.value === "n") {
			btnNorth();
		}
		else if (vCommand.value === "S" || vCommand.value === "s") {
			btnSouth();
		}
		else if (vCommand.value === "W" || vCommand.value === "w") {
			btnWest();
		}
		else if (vCommand.value === "E" || vCommand.value === "e") {
			btnEast();
		}
		else if (vCommand.value === "HELP" || vCommand.value === "help") {
			help();
		}
		else if (vCommand.value.toLowerCase() === "take") {
			switch (currentloc) {
				case 0:
					if (items[1].itemqty===0) {
						items[1].itemqty++;
						displaymsg("You have taken the plastic duck.");
					}
					break;
				case 3:
					if (items[2].itemqty===0) {
						items[2].itemqty++;
						displaymsg("You have taken the delicious pizza!");
					}
					break;
				case 5:
					if (items[0].itemqty===0) {
						items[0].itemqty++;
						displaymsg("You have taken the lighter.");
					}
					break;
				case 6:
					if (items[3].itemqty===0){
						items[3].itemqty++;
						displaymsg("You have taken the torch.");
					}
					break;
				default:
					displaymsg("There is nothing to take!");
			}	
		}
		else if (vCommand.value.toLowerCase() === "inventory") {
			var target = document.getElementById("tamain");
			var inventory = "INVENTORY: \n";
			for (i = 0, len = items.length; i < len; i++) {
				inventory = inventory + items[i].itemname + ": " + items[i].itemqty + "\n";
			}
			target.value = inventory + "\n" + target.value;
		}
	}
	else {
	  displaymsg("Please enter a valid command! (type HELP to see the commands) \n\n");
	}
	vCommand.value = "";
} 
 
function loc_msg() {
	var msgmsg = "";
	msgmsg = location_array[currentloc].locdesc;
	switch (currentloc) {
		case 0: 
			if(items[1].itemqty != 0) {
				msgmsg=location_array[currentloc].locdesc;
			}
			else {
				msgmsg=location_array[currentloc].locdesc2;
			}
			break;
		case 3: 
			if(items[2].itemqty != 0) {
				msgmsg=location_array[currentloc].locdesc;
			}
			else {
				msgmsg=location_array[currentloc].locdesc2;
			}
				break;
		case 5:
			if(items[0].itemqty != 0){
				msgmsg=location_array[currentloc].locdesc;
			}
			else{
				msgmsg=location_array[currentloc].locdesc2;
			}
			break;
		case 6:
			if(items[3].itemqty != 0) {
				msgmsg=location_array[currentloc].locdesc;
			}
			else {
				msgmsg=location_array[currentloc].locdesc2;
			}
			break;
		case 1:
		case 2:
		case 4:
		case 7:
		case 8:
		case 9:
			msgmsg=location_array[currentloc].locdesc;
			break;
		default: msgmsg="You cannot go this way"
	}
	displaymsg(msgmsg);
}