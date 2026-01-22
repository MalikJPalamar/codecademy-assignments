function getSleepHours (day){
  if (day === 'monday') {
  return 8;
} else if (day === 'tuesday') {
  return 7;
} else if (day === 'wednesday') {
  return 6.5;
} else if (day === 'thursday') {
  return 9;
} else if (day === 'friday') {
  return 5.5
} else if (day === 'saturday') {
  return 9.5
} else {
  return 10
}
}
getSleepHours('monday')
console.log(getSleepHours('monday'))

function getActualSleepHours() {
  let totalHours = 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
  return totalHours
}

function getIdealSleepHours(idealSleepHoursPerNight = 8) {
  return idealHoursPerNight * 7
}

getActualSleepHours()
console.log(getActualSleepHours(9))

getIdealSleepHours()
console.log(getIdealSleepHours())

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than you needed, with a surplus of: ${actualSleepHours - idealSleepHours} hours.`);
  } else { 
    console.log(`Get some rest! You have accumulated sleep debt of: ${actualSleepHours - idealSleepHours} hours.`)
}
}

function getSleepHours (day){
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6.5;
  } else if (day === 'thursday') {
    return 9;
  } else if (day === 'friday') {
    return 5.5;
  } else if (day === 'saturday') {
    return 9.5;
  } else if (day === 'sunday') {
    return 10;
  }
}

function getActualSleepHours() {
  // sum of hours from each day of the week
  return (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
  );
}

function getIdealSleepHours(idealHoursPerNight = 8) {
  return idealHoursPerNight * 7;
}

calculateSleepDebt();
