/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const parameters = {
vel : 10000, // velocity (km/h)
acc : 3, // acceleration (m/s^2)
time : 3600, // seconds (1 hour)  
d : 0, // distance (km)
fuel : 5000, // remaining fuel (kg)
fbr : 0.5, // fuel burn rate (kg/s)
}

//calcultes new distance
const calcNewDistance = ({ d, vel, time }) => {
  return d + (vel * (time / 3600)); // time converted to hours for km/h velocity
};

//calculates remaining fuel
const calcRemainingFuel = ({ fuel, fbr, time }) => {
  const fuelUsed = fbr * time; // fuel burn rate in kg/s multiplied by time in seconds
  if (fuelUsed > fuel) {
      throw new Error("Not enough fuel for the operation.");
  }
  return fuel - fuelUsed;
};

// Pick up an error with how the function below is called and make it robust to such errors
//calculates new velocity based on acceleration
const calcNewVel = ({ vel, acc, time }) => {
  // Convert m/s^2 to km/h^2
  const accInKmh2 = acc * 3600; // 1 m/s^2 is  3600 km/h^2
  return vel + (accInKmh2 * (time / 3600)); // velocity in km/h
};

try {
  const newVelocity = calcNewVel(parameters);
  const newDistance = calcNewDistance(parameters);
  const remainingFuel = calcRemainingFuel(parameters);

  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
} catch (error) {
  console.error(error.message);
}




