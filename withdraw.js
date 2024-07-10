
document.getElementById('btnWithdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdrawField')
    const newWithdraw = withdrawField.value 
    const withdrawTotalElement = document.getElementById('withdrawTotal')
    const previousWithdrawTotal = withdrawTotalElement.innerText
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdraw)
    // set in withdraw card
    withdrawTotalElement.innerText = currentWithdrawTotal

    
})