et raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 44;
if (age > 18 && registeredEarly) {
  raceNumber += 1000; console.log(`Your race time is at 9:30 am, and your number is ${raceNumber}`);
} else if (age > 18 && !registeredEarly) {
 console.log(`Your race time is at 11:00 am, and your race number is ${raceNumber}`);
} else if  (age < 18) {raceNumber += 1000;
 console.log(`Your race time is at 12:30 pm, and your race number is ${raceNumber}.`);
} else {
 console.log("See the registration desk for more information on your race time.")
}
