

function computerPlay(){
        function randNum(min ,max){                             
      return Math.floor(Math.random() * (max - min + 1) + min)  
    }
    const oneToThree = randNum(1,3);
    return result = (oneToThree === 1)? 'Rock': 
                    (oneToThree === 2)? 'Paper':
                    (oneToThree === 3)? 'Scissors': "error";
    };

    let computerSelection
    let playerSelection
    let win = 0;
    let lose = 0;

    function play(player ){
     let i=0;  //error if input isn't rock paper scissors
      do {
        playerSelection = player = prompt("Rock Paper Scissors", " ");
        computerPlay();
        computerSelection = computerPlay()

       let playerSelect = player.toLowerCase();
        switch (playerSelect) {
            case 'rock':
                switch (computerSelection) {
                    case 'Rock':
                        return alert ("Draw! Rock doesn't beat Rock");
                        break;
                    case 'Paper':
                        return [lose++, alert ("You Lose! Paper beats Rock")];
                        break;
                    case 'Scissors':
                        return [win++ ,alert ("You Win! Rock beats Scissors")];
                }
                break;
            case 'paper':
                switch (computerSelection) {
                    case 'Rock':
                        return [win++ ,alert ("You Win! Paper beats Rock")];
                        break;
                    case 'Paper':
                        return alert ("Draw! Paper doesn't beats Paper");
                        break;
                    case 'Scissors':
                        return [lose++, alert ("You Lose! Scissors beats Paper")];
                }
                break;
            case 'scissors':
                switch (computerSelection) {
                    case 'Rock':
                        return [lose++, alert ("You Lose! Rock beats Scissors")];
                        break;
                    case 'Paper':
                        return [win++ ,alert ("You Win! Scissors beats Paper")];
                        break;
                    case 'Scissors':
                        return alert ("Draw! Scissors doesn't beats Scissors");
                }
                break;
            default:
                alert ("Error: You Should input Rock, Paper or Scissors!");
                let i=1
        }
    } while (i=1)
    }


    

    function game(){
    
        for (let turn=0; turn<5; turn++) {
            play()
        }

        (win > lose)? alert("YOU WIN!!!!") : 
        (lose > win)? alert("COMPUTER WINS!!!") :
        alert ("DRAW!!!")
    }

    game()

