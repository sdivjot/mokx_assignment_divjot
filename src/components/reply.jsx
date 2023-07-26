import yogagirl from '../logos/yogagirl.svg'

function reply() {
    return <div className="h-[54px] flex flex-row justify-start w-full pl-[20px] pt-[30px]">
        <div><img src={yogagirl} alt="xyz" /></div>
        <div className='h-[54px] flex flex-col items-start w-full pl-[20px]'>
            <div className="bg-[#69235B] rounded-full text-[#FFFFFF] p-[10px] rounded-tl-lg">Sample Question</div>
            <div className="text-slate-300 p-[10px]">09:25 AM</div>
        </div>
    </div>

}

export default reply;