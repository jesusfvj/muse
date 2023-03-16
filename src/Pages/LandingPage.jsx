import React, { useState } from 'react'
import { Login } from '../Components/Pages/Home/Login';
import { Register } from '../Components/Pages/Home/Register';
import { Typography } from '../Components/Typography';

export const LandingPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const changeLogRegister = () => setIsRegistering(!isRegistering)
    return (
        <div className="items-center h-full bg-[url('./src/assets/images/LandBgImage.png')] bg-cover bg-center md:bg-left-bottom ">


            <div className='pt-32'>
                <img src="" alt="" />
                <Typography text="MUZE" type="important" />
            </div>
            {isRegistering ? <Register changeLogRegister={changeLogRegister} /> : <Login changeLogRegister={changeLogRegister} />}


        </div>
    )
}
