var rover1 = {
  direction: "N",
  positionX: 0,
  positionY: 0,
  travelLog: []
};

 function turnLeft(rover){
 switch(rover.direction){

   case 'N': rover.direction='W'; break;
   case 'W': rover.direction='S'; break;
   case 'S': rover.direction='E'; break;
   case 'E': rover.direction='N'; break;
 }
     console.log("turnLeft was called!");
}



 function turnRight(rover){
 switch(rover.direction){

   case 'N': rover.direction='E'; break;
   case 'E': rover.direction='S'; break;
   case 'S': rover.direction='W'; break;
   case 'W': rover.direction='N'; break;
 }
   console.log("turnRight was called!");
}


 function moveForward(rover){
  switch(rover.direction){
   case 'N': 
       if(rover.positionY <= 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
       }else{
         rover.positionY-=1;
       }
      break;
   
   case 'E':
      if(rover.positionX < 0 || rover.positionX > 10){
         console.log("Rover reached limit grid");
       }else{   
         rover.positionX+=1;
       }
       break;
   
   case 'S':
      if(rover.positionY < 0 || rover.positionY > 10){
         console.log("Rover reached limit grid");
      }else {
         rover.positionY+=1;
      }
     break;
     
   case 'W':
      if(rover.positionX < 0 || rover.positionX > 10){
         console.log("Rover reached limit grid");
      }else {
           rover.positionX-=1;
      }
     break;
  }
  
  console.log("moveForward was called");
  console.log("Rover is here: " + [rover.positionX, rover.positionY]);
 }


 function commandsRover(rover){
  var route = prompt("Insert the commands to move the Rover: f: forward, r: right, l: left");

  if(route.indexOf('f') >= 0 || route.indexOf('r') >= 0 || route.indexOf('l') >= 0 ){
  var newRoute = route.split("");
  console.log("Rover's route: " + route);
  for(var i = 0;  i < newRoute.length; i++){
    
     switch(route[i]){
     case 'l': turnLeft(rover); break;
     case 'r': turnRight(rover); break;
     case 'f': moveForward(rover); break;
    }
    
     var position = [rover1.positionX, rover1.positionY];
     rover1.travelLog.push(position);
     console.log("Rover's current location: " + position);
 
   }
  
  }else {
    alert("Enter a valid command!!");
    commandsRover(rover1);
  }
}
commandsRover(rover1);
 