import React, { useState } from 'react'
import { Logo } from '../Components/Logo'
import { FormWithInput } from '../Components/Pages/Profile/Body/FormWithInput'

export const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        console.log("Reset Ok")
    }

    return (
        <div className="items-center h-screen bg-black bg-cover bg-left-bottom">
            <Logo extraClassesParent="absolute top-[8vh]" />
            <div className="w-screen h-screen fixed top-0 flex items-center justify-center sm:gap-6 lg:gap-16">
                <div className="md:w-2/3 lg:w-1/3 h-2/5 w-4/5 bg-gradient-to-b from-[#4A4A4A] to-[#0A4148] flex flex-col items-center gap-8 p-6 rounded-md place-content-center" onClick={(e) => e.stopPropagation()}>
                    <FormWithInput
                        text="Reset your password"
                        name="Write new password"
                        nameTwo="repeat your password"
                        type="password"
                        valueOne="your password"
                        valueTwo={newPassword}
                        input="password"
                        onInputChange={(e) => setNewPassword(e.target.value)}
                        handleSubmit={handleResetPassword}
                    />
                </div>
            </div>
        </div>
    )
}
