

const PI = 3.1415;
const MinSquareMeter = 0.8;
const radius = 5;
const area = PI *radius* radius;
const maxPlant = Math.floor(area / MinSquareMeter); // 98
let initalPlant = 20;

let weeks = 0
while (initalPlant <= maxPlant) {
  weeks++;
  //initalPlant *= 2;
  initalPlant = initalPlant * MinSquareMeter * 2;
} 

function GrowingStatus(initalPlant) {
  
    if (initalPlant > 0.8 * maxPlant) {
  
      console.log(
        weeks + " " + "Stop them from exceeding the capacity of the garden"
      );
    } else if (initalPlant >= 0.5 * maxPlant && initalPlant <= 0.8 * maxPlant) {
    //   weeks = initalPlant * MinSquareMeter * 2;
      console.log("Growing at an acceptable rate");
    } else {
      console.log("There is room to plant more plants");
    }
 
}


// for (let weeks = 1; weeks <= 3; weeks++) {
//   //The Math.pow() method returns the value of x to the power of y.
//   let initalPlant = initalPlant * Math.pow(2,weeks);
//   let condition = GrowingStatus(initalPlant);
//   console.log(`Week ${weeks}: ${initalPlant} plants - Condition: ${condition}`);
// }


try {
    let result = GrowingStatus();
    console.log(result)
} catch (error) {
    console.log("An error occurred: ");
}




