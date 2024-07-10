
document.getElementById('btnSubmit').addEventListener('click', function(){
    // get email
   const emailFeild = document.getElementById('userEmail')
   const email = emailFeild.value
    // get password
    const passFeild = document.getElementById('userPassword')
    const password = passFeild.value
    // dont do this** but for now just, varify your email and pass
    if(email === 'sontan@baap.com' && password === 'secret' ){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }
})