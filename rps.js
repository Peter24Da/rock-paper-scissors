const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className;
        console.log(playerSelection);
        play();
    })
});

function computerPlay(){
        function randNum(min ,max){                             
      return Math.floor(Math.random() * (max - min + 1) + min)  
    }
    const oneToThree = randNum(1,3);
    return result = (oneToThree === 1)? 'Rock': 
                    (oneToThree === 2)? 'Paper':
                    (oneToThree === 3)? 'Scissors': "error";
    };

    let computerSelection ;
    let playerSelection ;
    let playerScore = 0;
    let computerScore = 0;

    function play(){

        computerPlay();
        computerSelection = computerPlay()

        switch (playerSelection) {
            case 'rock':
                switch (computerSelection) {
                    case 'Rock':
                        return alert ("Draw! Rock doesn't beat Rock");
                        break;
                    case 'Paper':
                        return [computerScore++, alert ("You Lose! Paper beats Rock")];
                        break;
                    case 'Scissors':
                        return [playerScore++ ,alert ("You Win! Rock beats Scissors")];
                }
                break;
            case 'paper':
                switch (computerSelection) {
                    case 'Rock':
                        return [playerScore++ ,alert ("You Win! Paper beats Rock")];
                        break;
                    case 'Paper':
                        return alert ("Draw! Paper doesn't beats Paper");
                        break;
                    case 'Scissors':
                        return [computerScore++, alert ("You Lose! Scissors beats Paper")];
                }
                break;
            case 'scissors':
                switch (computerSelection) {
                    case 'Rock':
                        return [computerScore++, alert ("You Lose! Rock beats Scissors")];
                        break;
                    case 'Paper':
                        return [playerScore++ ,alert ("You Win! Scissors beats Paper")];
                        break;
                    case 'Scissors':
                        return alert ("Draw! Scissors doesn't beats Scissors");
                }
                break;
            default:
        }}