//Access to Enter Button 

var login_Button_id=document.getElementById("login_Button");
login_Button_id.addEventListener("click",function(){
    var login_page_id=document.getElementById("Login_Page");
    login_page_id.style.display="none";
    var Transaction_Area_id=document.getElementById("Transaction_Area");
    Transaction_Area_id.style.display="block";
})

//Transaction Area display none

var hide=document.getElementById("Transaction_Area");
hide.style.display="none";

//Creating new Functions for interacting program

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

//Deposit Button Access

var Deposit_Button_id=document.getElementById("Deposit_Button");
Deposit_Button_id.addEventListener("click",function(){
    var getNumber=getInputNumber("input_Deposit");
    updateSpanText("Deposit_Display",getNumber);
    updateSpanText("Balance_Display",getNumber);
    document.getElementById("input_Deposit").value = "";
    
})

//Withdraw Button Access

var Withdraw_Button_id=document.getElementById("Withdraw_Button");
Withdraw_Button_id.addEventListener("click",function(){
var getNumber2=getInputNumber("input_Withdraw");
updateSpanText("Withdraw_Display",getNumber2);
updateSpanText("Balance_Display",-1*getNumber2);
document.getElementById("input_Withdraw").value = "";
})