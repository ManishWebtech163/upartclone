import React from 'react'
import TextField_common from './formFields/TextField_common'
import { useForm } from 'react-hook-form'
import PasswordField_common from './formFields/PasswordField_common'
import Button_common from './Button'
import GradientButton from './gradientButton'
import { IconButton } from '@mui/material'

export default function LoginForm() {
    const { register, handleSubmit } = useForm()
    return (
        <div className='loginForm'>

            {/* --login form-- */}
            <form>
                <div>
                    <TextField_common placeholder="Email / Phone Number" register={{ ...register("email_phone") }} />
                </div>
                <div>
                    <PasswordField_common placeholder="Pasword" register={{ ...register("password") }} />
                </div>
                <GradientButton text="Login" />
            </form>

            {/* --social login-- */}
            <div className="socialLogin">
                <div className="divaider">
                    <span className="line"></span>
                    <span className="text">or continue with</span>
                </div>
                <div className="socialBtn">
                    <IconButton aria-label="gmail">
                        <img src='./icons/gmail.png' alt='gmailIcon' />
                    </IconButton>
                    <IconButton aria-label="facebook">
                        <img src='./icons/facebook.png' alt='facebookIcon' />
                    </IconButton>
                </div>
            </div>

            {/* --new user-- */}
            <div className="newUser">
                New User? <a>Sign Up</a>
            </div>

        </div>
    )
}
