document.getElementById("withDraw-btn").addEventListener("click", function(){
    let withDrawField =  document.getElementById("withDraw-input");
    let withDrawAmount =  withDrawField.value;
    

    let preWithdrawElement = document.getElementById('preWithdraw');
    let preWithdrawAmount =  preWithdrawElement.innerText;
    let totalWithDraw =  parseFloat(preWithdrawAmount)+parseFloat(withDrawAmount);
   
    
    if(withDrawAmount<0){
        alert("Invalid Input");
        return;
    }
    else if(withDrawAmount==""){
        alert ("Please Inter an Amount");
        return;
    }
    else{
        let preBalanceElement = document.getElementById("preBalance");
        let preBalanceAmount = preBalanceElement.innerText;
        let totalBalance =  parseFloat(preBalanceAmount)-parseFloat(withDrawAmount);
        if(parseFloat(withDrawField.value)>parseFloat(preBalanceElement.innerText)){
            alert("Insufficient Balance");
            return;
        }
        else{
            preWithdrawElement.innerText = totalWithDraw;
            preBalanceElement.innerText= totalBalance;
        }
        
    };
    withDrawField.value="";
   
   })