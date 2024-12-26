export const checkValidate = (email, password) =>{
    const isEmailValid = /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/gi.test(email)
    if(!isEmailValid){
        return 'Invalid Email Id'
    }

    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gi.test(password)
    if(!isPasswordValid){
        return 'Invalid Password'
    }

    return null
}