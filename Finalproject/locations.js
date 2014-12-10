var location_array = [];
var currentloc = 0;
var mapArray = [];

function loc_proto() {
	this.locname = "";
	this.locvisited = 0;
	this.locdesc = "";
	this.locdesc2 = "";
}

function init_locations() {
	var bathroom = new loc_proto()
	var dining = new loc_proto();
	var bedroom = new loc_proto();
	var kitchen = new loc_proto();
	var living = new loc_proto();
	var veranda = new loc_proto();
	var basement = new loc_proto();
	var garden = new loc_proto();
	var garage = new loc_proto();
	var roof = new loc_proto();
	
	bathroom.locname = "Bathroom";
	bathroom.locvisited = 1;
	bathroom.locdesc = "You are in the bathroom.";
	bathroom.locdesc2 = "You are in the bathroom. There is a rubber duck in the bathtub.";
	location_array.push(bathroom);
	
	bedroom.locname = "Bedroom";
	bedroom.locdesc = "You are in your bedroom.";
	location_array.push(bedroom);
	
	dining.locname = "Dining Room";
	dining.locdesc = "You are in the dining room.";
	location_array.push(dining);
	
	kitchen.locname = "Kitchen";
	kitchen.locdesc = "You are in the kitchen.";
	kitchen.locdesc2 = "You are in the kitchen. There is still pizza from yesterday night...";
	location_array.push(kitchen);
	
	living.locname = "Living Room";
	living.locdesc = "You found Leo! Now he can take his bath. \n\nCongratulations!\n\n";
	location_array.push(living);
	
	veranda.locname = "Veranda";
	veranda.locdesc = "You just feel a little breeze on your veranda";
	veranda.locdesc2 = "You just feel a little breeze on your veranda. There is a lighter on the floor.";
	location_array.push(veranda);
	
	basement.locname = "Basement";
	basement.locdesc = "You went in your basement, no lights and no cat here.";
	basement.locdesc2 = "You go into your basement. There is a torch on the ground.";
	location_array.push(basement);
	
	garden.locname = "Garden";
	garden.locdesc = "You are in your garden, nothing to do there.";
	location_array.push(garden);
	
	garage.locname = "Garage";
	garage.locdesc = "You are standing in your garage, your car is still as dirty as last week.";
	location_array.push(garage);
	
	roof.locname = "Roof";
	roof.locdesc = "You are on the roof, imagine if you actualy had a real one...";
	location_array.push(roof);

	mapArray = [[-1,-1,1,-1],
				[0, 9, 5, 2],
				[-1,1,-1, 3],
				[ 4, 2,6,-1],
				[-1,-1,-1,3],
				[ 1,8, 7,-1],
				[3,-1,-1,-1],
				[5,-1,-1,-1],
				[-1,-1,-1,5],
				[-1,-1,-1,1]];
}

function locNew(d) {
	var loc_new = currentloc;
	var dest = mapArray[currentloc][d];
	loc_new = dest;
	return loc_new;
}


function locationvisited() {
	location_array[currentloc].locvisited++;
}

function btnNorth() { 
	if (locNew(0) != -1) {
		currentloc=locNew(0);
		updateScore();
		locationvisited();
		loc_msg();
	}
	else {
		displaymsg("You cannot go north from here! \n\n");
	}            
}

function btnEast() {
	if (locNew(1) != -1) {
		currentloc=locNew(1);
		updateScore();
		locationvisited();
		loc_msg();
	}
	else {
		displaymsg("You cannot go east from here! \n\n");
	} 
}

function btnSouth() {
	if (locNew(2) != -1) {
		currentloc=locNew(2);
		updateScore();
		locationvisited();
		loc_msg();
	}
	else {
		displaymsg("You cannot go south from here! \n\n");
	}           
}
   
function btnWest() {
	if (locNew(3) != -1) {
		currentloc=locNew(3);
		updateScore();
		locationvisited();
		loc_msg();
	}
	else {
		displaymsg("You cannot go west from here! \n\n");
	}          
}