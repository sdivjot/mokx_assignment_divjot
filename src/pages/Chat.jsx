import nav from '../logos/chatnav.svg'
import Query from '../components/query'
import Reply from '../components/reply'
import send from '../logos/sendbtn.svg'
import mic from '../logos/mic.svg'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router'

function Chat() {
    const navigate = useNavigate();
    function goBack(){
        navigate(-1);
    }
    return <>
    <div className='flex flex-col items-center bg-slate-100 w-full h-screen'>
        <div className='drop-shadow-xl w-full'><img onClick={goBack} src={nav} alt="nav" className='w-full p-[24px] pt-[40px] bg-[#FFFFFF]'/></div>
        <div className='font-link font-bold text-lg text-[#69235B] pt-[20px] pb-[20px]'>Today</div>
        <div className='w-full'><Query/><Reply/></div>
        <div className='rounded-full bg-[#FFFFFF] drop-shadow-xl flex flex-row justify-between items-center w-11/12 p-[20px] m-3 fixed bottom-4'>
            <TextField placeholder='Write your message' variant='standard' className='w-full'></TextField>
            <div className='flex flex-row'><img src={send} alt="send" />
            <img src={mic} alt="record" /></div>
        </div>
    </div>
    </>
}

export default Chat;