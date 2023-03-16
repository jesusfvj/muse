import React, { useState } from 'react'
import { Login } from '../Components/Pages/Home/Login';
import { Register } from '../Components/Pages/Home/Register';
import { Typography } from '../Components/Typography';

export const LandingPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const changeLogRegister = () => setIsRegistering(!isRegistering)
    return (
        <div className="items-center bg-[url('./src/assets/images/LandBgImage.png')] bg-cover bg-left-bottom">
            {isRegistering ?
                <div>
                    <Register changeLogRegister={changeLogRegister}/>
                   
                </div>
                :
                <div>
                    <Login changeLogRegister={changeLogRegister}/>
                    
                </div>
            }
        </div>
    )
}
