let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = true;
let runnersAge = 35;

if(runnersAge > 18 && regEarly){
  raceNumber += 1000;
}
if(runnersAge > 18 && regEarly){
  console.log(`Your race is at 9.30am and your race number is ${raceNumber}.`);
}else if(runnersAge > 18 && !regEarly){
  console.log(`You will race at 11am. Your race number is ${raceNumber}.`);
}else if(runnersAge < 18 && regEarly){
  console.log(`Your race is at 12:30pm and your number is ${raceNumber}.`);
}else if(runnersAge < 18 && !regEarly){
  console.log(`Your race is at 12:45pm and your number is ${raceNumber}.`);
}else{
  console.log('See registration desk.');
}