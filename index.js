const prompt = require('readline-sync');

/* Global Variables */ 

let continents = ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];

/* Dynamic Variables */
let correctTotal = 7;
let maxLives = 3;
let userResp = [ ];

let userAns = prompt.question(`Let's see how well you know the continents of the world! If you answer incorrectly ${maxLives} times you will lose and have to start over. Type your answers in one at a time, writing the continent's full name. Spelling and punctuation counts. Ready, GO!.\n\n`) 

const contAns = (userAns) => {
    for(let answers = 0; maxLives !==0; answers++) {
        if ((userAns == userResp[0]) || (userAns == userResp[1]) || (userAns == userResp[2]) || (userAns == userResp[3]) || (userAns == userResp[4]) || (userAns == userResp[5]) || (userAns == userResp[6])) {
            console.log("Hey, you've already answered that one!"); 
            userAns = prompt.question("Try a different continent\n\n");
        } else if ((userAns == continents[0]) || (userAns == continents[1]) || (userAns == continents[2]) || (userAns == continents[3]) || (userAns == continents[4]) || (userAns == continents[5]) || (userAns == continents[6])) {
            userResp.push(userAns);
            console.log(`That is correct! You have ${correctTotal-- -1} continents left to answer!`);
            if (correctTotal > 0) {
                userAns = prompt.question("Enter 'check' if you would like to see to what you've already answered. Otherwise type your next continent!\n\n")
            } else if (correctTotal === 0) {
                console.log("🎊 Congrats, you win! 🎉 Wow, you really know your continents! 🗺");
                playAgain();
            }
        } else if (userAns == 'check') {
            console.log(userResp);
            userAns = prompt.question("Hope that helped. Type in your next continent!\n\n");
        } else {
            let currentLives = maxLives-- - 1;
            console.log(`That's not quite right. You have ${currentLives} incorrect answers left.`);
            if (currentLives > 0) {
                userAns = prompt.question("Enter 'check' if you would like to see to what you've already answered. Otherwise, type in your next answer!\n\n")
            } else if (currentLives === 0) {
                console.log("You lose. Better start brushing up on your elementary geography... 😔");
                playAgain();
            }
        }
    } 
}

const playAgain = () => {
    let playAgain = prompt.question('Do you want to play again? y || n \n');
    playAgain = playAgain.toLowerCase();
    if (playAgain === 'y') {
      continents = ['Africa', 'Antarctica', 'Asia', 'Australia', 'Europe', 'North America', 'South America'];
      correctTotal = 7;
      maxLives = 3;
      userResp = [ ];
      let newAns = prompt.question(`Let's see how well you know the continents of the world! If you answer incorrectly ${maxLives} times you will lose and have to start over. Type your answers in one at a time, writing the continent's full name. Spelling and punctuation counts. Ready, GO!.\n\n`)
      contAns(newAns);
    } else {
      console.log('Thanks for playing.\nGoodbye.');
    }
  };

contAns(userAns);

