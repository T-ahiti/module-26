
document.getElementById('btnDeposit').addEventListener('click', function(){
    const depositField =document.getElementById('depositField')
    const newDepositAmount = depositField.value

    // get current deposit total
    //  input field na hole inner text diye value nite hoy
    const totalDeposit = document.getElementById('depositTotal')
    const previousDepositTotal = totalDeposit.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount)
    totalDeposit.innerText = currentDepositTotal

    depositField.value = ''

    // get balance 
    const balanceTotalElement = document.getElementById('balanceTotal')
    const previousBalanceTotal = balanceTotalElement.innerText
    const currentBalanceTOtal = parseFloat(previousBalanceTotal) + parseFloat(currentDepositTotal)
    balanceTotalElement.innerText = currentBalanceTOtal
})
