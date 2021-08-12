let userName = 'eben';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
let userQuestion = 'What is your favorite color?'
console.log(`${userName}: ${userQuestion}`)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ' ';
switch(randomNumber){
  case 0:
    eightBall = 'Well, can\'t tell';
  break;
  case 1:
    eightBall = 'I will try';
  break;
  case 2:
    eightBall = 'Why don\'t you ask someday';
  break;
  case 3:
    eightBall = 'Why do you want to know';
  break;
  case 4:
    eightBall = 'It\'s blue';
  break;
  case 5:
    eightBall = 'Green';
  break;
  case 6:
    eightBall = 'Pink';
  break;
  case 7:
    eightBall = 'White';
  break;
  default:
    eightBall = 'Maybe Yellow!';
  break;
}

console.log(`Your answer is: ${eightBall}`);