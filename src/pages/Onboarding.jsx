import namaste from '../yogagirl.png'
import logos from '../logos/applegooglefb.svg'
import or from '../logos/or.svg'
import Loadup from './Loadup'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'

function Onboarding() {
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setTimeout(() => { setLoad(false); }, 1000);
    }, []);
    return <>
        {load && <Loadup/>}
        {!load && <><div className='flex flex-col items-center justify-evenly bg-[#69235B] h-screen'>
            <img className='w-full' src={namaste} alt="namaste" />

            <div className='w-[320px] font-link font-extrabold text-4xl text-[#FFFFFF] pt-[40px]'>Discover the timeless wisdom of <div className='text-[#FFC746]'>the Vedas</div> </div>
            <div className='text-[#FFFFFF] w-[320px] text-lg font-light'>Sign up and<span className='text-[#FFC746]'> journey through ancient knowledge with Arya 🌟</span></div>
            <img src={logos} alt="" />
            <img src={or} alt="" />
            <Button href="/signup" style={{ backgroundColor: "#FFC746", width: "340px", borderRadius: "10px", height: "54px" }} variant="contained" disableElevation><div className='text-lg text-[#69235B] font-bold font-link'>Sign up with mail</div></Button>
            <div className='cursor-pointer text-xl text-[#FFFFFF] font-bold font-link text-lg'>Existing account?<span className='text-[#FFC746]'><a href="/login"> Log in</a></span></div>
        </div></>}
        {!load && <div className='flex flex-row text-lg bg-[#CBCBFF] h-8 w-48 rounded-md text-[#69235B] font-medium justify-center align-center z-10 absolute top-[320px] left-24'>Arya, Vedic AI Guide</div>}
    </>
}

export default Onboarding;