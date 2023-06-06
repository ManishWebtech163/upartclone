import React from 'react'
import { useForm } from 'react-hook-form'
import TextField_common from './formFields/TextField_common'
import PasswordField_common from './formFields/PasswordField_common'
import GradientButton from './gradientButton'
import { IconButton } from '@mui/material'
import { useState } from 'react'

export default function RegisterForm() {
    // --active type--
    const [activeType, setactiveType] = useState("")
    // --form vlidtions--
    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    // --form submit fun--
    const registerFormSubmit = (values) => {
        console.log(values, "registerFormSubmit")
    }
    return (
        <div className="registerForm">
            <form onSubmit={handleSubmit(registerFormSubmit)}>
                <div className="selectType field">
                    <p className="pera">You want to...</p>
                    <div className="select">
                        <label htmlFor="WorkAsArtist" onClick={() => setactiveType("WorkAsArtist")} className={`registerTypeLabel WorkAsArtist ${activeType === "WorkAsArtist" && "active"}`}>
                            <input type="radio" name="selectType" id="WorkAsArtist" value="Work as an Artist" {...register("typoOfUser", { required: true })} hidden />
                            Work as an <br /> Artist
                        </label>
                        <label htmlFor="HireAnArtist" onClick={() => setactiveType("HireAnArtist")} className={`registerTypeLabel HireAnArtist ${activeType === "HireAnArtist" && "active"}`}>
                            <input type="radio" name="selectType" id="HireAnArtist" value="Hire an Artist"  {...register("typoOfUser", { required: true })} hidden />
                            Hire an <br /> Artist
                        </label>
                    </div>
                    <span>{errors.typoOfUser?.message}</span>
                </div>
                <div className="fields">

                    <div className="name field">
                        <TextField_common type="text" placeholder="Full Name" register={{ ...register("name", { required: "Full name is required" }) }} name="fullName" error={errors.fullName && true} errorMsg={errors.fullName?.message} />
                    </div>
                    <div className="mobile field">
                        <span>Mobile No.</span>
                        <TextField_common type="tel" placeholder="Mobile Number" register={{ ...register("mobileNum", { required: "mobileNum is required" }) }} name="mobileNumber" validations={{ required: "Mobile num is required" }} error={errors.mobileNumber && true} errorMsg={errors.mobileNumber?.message} />
                    </div>
                    <div className="email field">
                        <span>Email</span>
                        <TextField_common type="email" placeholder="Email" register={register} name="email" validations={{ required: "email is requried" }} error={errors.email && true} errorMsg={errors.email?.message} />
                    </div>
                    <div className="password field">
                        <span>Password</span>
                        <PasswordField_common placeholder="password" register={register} name="password" />
                    </div>
                    <div className="buttons field">
                        <div className="submitBtn">
                            <GradientButton text="Unlock Benefits" />
                            <span>It's Free</span>
                        </div>
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
                </div>
            </form>
        </div>
    )
}
