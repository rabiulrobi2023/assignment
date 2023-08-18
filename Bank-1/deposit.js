document.getElementById('deposit-btn').addEventListener("click", function(){
    let depositField = document.getElementById("deposit-input")
    let newDepositAmount = depositField.value;
    
    let preDepositElement = document.getElementById("deposit-instant")
    let preDepositAmount = preDepositElement.innerText;
    let totalDeposit = parseFloat(preDepositAmount)+parseFloat(newDepositAmount);
    if(parseFloat(newDepositAmount)<0){
        alert("Invalid Input");
        return;
    }
    else if(newDepositAmount==""){
        alert ("Please Inter an Amount")
        return;
    }
    else{
        preDepositElement.innerText = totalDeposit;

        let preBalanceElement = document.getElementById("preBalance");
        let preBalanceAmount = preBalanceElement.innerText;
        let totalBalance =  parseFloat(preBalanceAmount)+ parseFloat(newDepositAmount);
        preBalanceElement.innerText = totalBalance;
        depositField.value='';
    }
    depositField.value='';
})



