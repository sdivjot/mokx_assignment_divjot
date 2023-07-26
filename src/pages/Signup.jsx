import loginmokx from '../logos/signup.svg'
import { Button, TextField } from '@mui/material'
import logo from '../mokxlogo.svg'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    function goBack(){
        navigate(-1);
    }

    return <><div className='flex flex-col items-center justify-evenly h-screen'>
        <img src={logo} className='w-[72px]' alt="" />
        <img src={loginmokx} alt="login" />
        <div className='text-[#69235B] w-[300px] h-[40px] text-center'>Enter your  details and dive into a realm of ancient wisdom! 💫</div>
        <div className='w-[328px] pb-[60px] pt-[30px]'>
            <div className='font-link font-bold text-[#69235B]'>Your name</div>
            <TextField className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
            <div className='font-link font-bold text-[#69235B] pt-[30px]'>Your email</div>
            <TextField className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
            <div className='font-link font-bold text-[#69235B] pt-[30px]'>Password</div>
            <TextField className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
            <div className='font-link font-bold text-[#69235B] pt-[30px]'>Confirm Password</div>
            <TextField className='w-full text-xl' inputProps={{style: {fontSize: 30}}} id="standard-basic" variant="standard" />
        </div>
        <Link to='/chat'><Button style={{backgroundColor: "#FFC746",width: "340px",borderRadius: "10px" , height: "54px"}} variant="contained" disableElevation><div className='text-lg text-[#69235B] font-bold font-link'>Create an account</div></Button></Link>
    </div>
    <ArrowBackIcon onClick={goBack} className='fixed top-[30px] left-[30px]'/>
    </>
}

export default Login;