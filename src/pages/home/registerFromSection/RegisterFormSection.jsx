import React from 'react'
import RegisterForm from '../../../components/RegisterForm'

export default function RegisterFormSection() {
    return (
        <section className="registerFormSection">
            <div className="registerFormContainer">
                <div className="formContainer">
                    <h3 className="heading">Try now</h3>
                    <RegisterForm />
                </div>
            </div>
        </section>
    )
}
