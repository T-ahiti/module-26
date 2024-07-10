
document.getElementById('btnSubmit').addEventListener('click', function(){
    // get email
   const emailFeild = document.getElementById('userEmail')
   const email = emailFeild.value
    // get password
    const passFeild = document.getElementById('userPassword')
    const password = passFeild.value
    // dont do this** but for now just, varify your email and pass
    if(email === 'sontan@baap.com' && password === 'secret' ){
        window.location.href = 'bank.html'
    }
    else{
        alert('toke tejjo ghoshona korlam, tui password vule gesos')
    }
}) 