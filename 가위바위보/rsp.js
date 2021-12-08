function rsp(userInput){

    var userInput;//한글
    var computerInput1 = Math.floor(3*Math.random());//숫자
    var computerInput;//한글
    
    
    
    if(computerInput1 == 0){
        computerInput = '가위';
    }
    else if(computerInput1 == 1){
        computerInput = '바위';
    }
    else if(computerInput1 == 2){
        computerInput = '보';
    }
    
    if(userInput!='가위'&&userInput!='바위'&&userInput!='보'){
        alert('가위바위보만 입력하세요');
    }
    else{
        // 가위<바위   바위<보  보<가위
        if(userInput == computerInput){
            alert('컴퓨터' + computerInput + '\n당신' + userInput + '\n비겼습니다');
        }
        else if((userInput=='가위'&&computerInput=='바위')||(userInput=='바위'&&computerInput=='보')||(userInput=='보'&&computerInput=='가위')){
            alert('컴퓨터' + computerInput + '\n당신' + userInput + '\n졌습니다');
        }
        else{
            alert('컴퓨터' + computerInput + '\n당신' + userInput + '\n이겼습니다');
        }
        
    }
    
}

