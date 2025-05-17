import React from 'react'
import PropTypes from 'prop-types'
import LogIn from './LoginForm'
import SignUp from './SignupForm'
import ResetPasswordForm from './ResetPasswordForm'

const AuthInputs = props => {
  return (
    <div className="flex flex-col items-center w-[100%] mt-4">
<LogIn/>
<SignUp/>
<ResetPasswordForm/>
    </div>    

)
}

AuthInputs.propTypes = {}

export default AuthInputs