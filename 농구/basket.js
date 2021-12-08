var comScore = 0;
var userScore = 0;
var isComputerTurn = true;
var shotsLeft = 15;

//초기에 유저 버튼 비활성화 세팅좀 하고싶음

function showText(s){
    var textElem = document.getElementById('text');
    textElem.innerHTML = s;
}

function updateComputerScore(score){
    comScore += score;
    var comScoreElem = document.getElementById("computer-score");
    comScoreElem.innerHTML = comScore;
}

function updateUserScore(score){
    userScore += score;
    var userScoreElem = document.getElementById("user-score");
    userScoreElem.innerHTML = userScore;
}

function disableComputerButton(flag){
    var computerButtons = document.getElementsByClassName('btn-computer');

    for(var i=0;i<computerButtons.length ;i++){
        computerButtons[i].disabled = flag;
    }
}
function disableUserButton(flag){
    var userButtons = document.getElementsByClassName("btn-user");

    for(var i=0;i<userButtons.length ;i++){
        userButtons[i].disabled = flag;
    }
}

function onComputerShoot(){
    var computerButtons = document.getElementsByClassName("btn-computer");


    if(!isComputerTurn)
        return ;
    var comScoreElem = document.getElementById('computer-score');
    var textElem = document.getElementById('text');
    var shootType = Math.random()<0.5? 2: 3;
    


    if(shootType == 2){
        if(Math.random()<0.5){
            showText("컴퓨터가 2점슛을 성공했습니다");

            updateComputerScore(2);
        }
        else{
            showText("컴퓨터가 2점슛을 실패했습니다");
        }
    }
    else{
        if(Math.random()<0.33){
            showText("컴퓨터가 3점슛을 성공했습니다");

            updateComputerScore(3);
        }
        else{
            showText("컴퓨터가 3점슛을 실패했습니다");
        }
    }
    isComputerTurn = false;

    var userButtons = document.getElementsByClassName('btn-user');

    
    disableUserButton(false);
    disableComputerButton(true);

   
}

function onUserShoot(shootType){
    var userButtons = document.getElementsByClassName("btn-user");


    if(isComputerTurn)
        return ;
    var textElem = document.getElementById('text');
    var userScoreElem = document.getElementById('user-score');

    if (shootType ===2 ){
        if(Math.random()<0.5){
            showText("2점슛을 성공했습니다");

            updateUserScore(2);
        }
        else{
            showText("2점슛을 실패했습니다");
        }
    }
    else{
        if(Math.random()<0.33){
            showText("3점슛을 성공했습니다");
            
            updateUserScore(3);
        }
        else{
            showText("3점슛을 실패했습니다");
        }

    }
    isComputerTurn = true;

    var computerButtons = document.getElementsByClassName('btn-computer');

    
    disableComputerButton(false);
    disableUserButton(true);

    shotsLeft --;
    var shotsLeftElem = document.getElementById('shots-left');
    shotsLeftElem.innerHTML = shotsLeft;

    if(shotsLeft == 0){
        if(userScore>comScore){
            showText("승리");
        }
        else if(userScore<comScore){
            showText("패배");
        }
        else{
            showText("무승부");
        }

        disableUserButton(true);
        disableComputerButton(true);
    }
}