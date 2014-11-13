function btnNorth() {         
           if (currentloc===1) {
            currentloc=0;
			updateScore();
			locationvisited();
			loc_msg();
           } 
           else if (currentloc===3) {
             currentloc=4;
			 updateScore();
			 locationvisited();
			loc_msg();
            }
           else if (currentloc===5){
              currentloc=1;
			  updateScore();
			  locationvisited();
			  loc_msg();
            }
           else if (currentloc===5){
              currentloc=2;
			  updateScore();
			  locationvisited();
			  loc_msg();
            }
           else if (currentloc===6){
              currentloc=3;
			  updateScore();
			  locationvisited();
			  loc_msg();
            }
			else if (currentloc===7) {
			  currentloc=5;
			  updateScore();
			  locationvisited();
			  loc_msg();
			}
           else {
            displaymsg("You cannot go north! \n\n");
            }            
          }
            

         function btnSouth() {
          if (currentloc===0) {
           currentloc=1;
		   updateScore();
		   locationvisited();
		   loc_msg();      
            }else if (currentloc===4) {
             currentloc=3;
			 updateScore();
			 locationvisited();
			 loc_msg();
            }
             else if (currentloc===1) {
             currentloc=5;
			 updateScore();
			 locationvisited();
			 loc_msg();
             }
             else if (currentloc===5) {
             currentloc=7;
			 updateScore();
			 locationvisited();
			 loc_msg();
             }
             else if (currentloc===3) {
             currentloc=6;
			 updateScore();
			 locationvisited();
			 loc_msg();
             } 
             else {
             displaymsg("You cannot go this way");
            }           
          }

               
         function btnWest() {
          if (currentloc===2) {
           currentloc=3;
		   updateScore();
		   locationvisited();
           loc_msg();
           }
           else if(currentloc===1) {
            currentloc=2;
			updateScore();
			locationvisited();
			loc_msg();
            }
            else if (currentloc===9) {
             currentloc=1;
			 updateScore();
			 locationvisited();
			 loc_msg();
            }
            else if (currentloc===8) {
             currentloc=5;
			 updateScore();
			 locationvisited();
			 loc_msg();
          }
           else {
           displaymsg("You cannot go this way");
          }          
         }
           
         function btnEast() {
          if (currentloc===2) {
           currentloc=1;
		   updateScore();
		   locationvisited();
		   loc_msg();
           } 
           else if (currentloc===3) {
            currentloc=2;
			updateScore();
			locationvisited();
			loc_msg();
           }
           else if (currentloc===1) {
             currentloc=9;
			 updateScore();
			 locationvisited();
			 loc_msg();
           }
           else if (currentloc===5) {
             currentloc=8;
			 updateScore();
			 locationvisited();
			 loc_msg();
           }
           else {
           displaymsg("You cannot go this way");
           } 
          }