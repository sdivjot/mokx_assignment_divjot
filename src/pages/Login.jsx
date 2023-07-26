import loginmokx from '../logos/login.svg'
import or from '../logos/or.svg'
import logos from '../logos/logoswh.svg'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    function goBack(){
        navigate(-1);
    }
    const [mail, setMail]=useState("");
    const [pass, setPass]=useState("");
    const [e, setE]=useState(false);
    function handleChange1(event){
        setMail(event.target.value);
        if(mail!=="" && pass!==""){
            setE(true);
        }
        else{
            setE(false);
        }
    }
    function handleChange2(event){
        setPass(event.target.value);
        if(mail!=="" && pass!==""){
            setE(true);
        }
        else{
            setE(false);
        }
    }
    return <><div className='flex flex-col items-center justify-evenly h-screen'>
        <img src={loginmokx} alt="login" />
        <div className='text-[#69235B] w-[293px] h-[40px] text-center'>Welcome back! Sign in using your social account or email to continue us</div>
        <img src={logos} alt="logos" />
        <img src={or} alt="or" />
        <div className='w-[328px] pb-[100px]'>
            <div className='font-link font-bold text-[#69235B]'>Your email</div>
            <TextField value={mail} onChange={handleChange1} className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
            <div className='font-link font-bold pt-[30px] text-[#69235B]'>Password</div>
            <TextField value={pass} onChange={handleChange2} className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
        </div>
        {!e && <Button disabled style={{backgroundColor: "#FBDC94",width: "340px",borderRadius: "10px" , height: "54px"}} variant="contained" disableElevation><div className='text-lg text-[#EDA0A8] font-bold font-link'>Login</div></Button>}
        {e && <Link to='/chat'> <Button style={{backgroundColor: "#FFC746",width: "340px",borderRadius: "10px" , height: "54px"}} variant="contained" disableElevation><div className='text-lg text-[#69235B] font-bold font-link'>Login</div></Button> </Link>}
        <div className='cursor-pointer text-xl text-[#FFC746] font-link text-lg'><div>Forgot Password?</div></div>
    </div>
    <ArrowBackIcon onClick={goBack} className='fixed top-[30px] left-[30px]'/>
    </>
}

export default Login;