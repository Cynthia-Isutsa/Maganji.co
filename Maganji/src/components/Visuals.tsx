import { FaRegCalendarMinus } from "react-icons/fa"


const Visuals = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#f8f9fc]'>
      <div className="flex justify-between items-center">
        <h2 className="text-[#5a5c69] text-2xl font-normal cursor-pointer">Dashboard</h2>
        <button className='bg-[#4E73DF] rounded-sm h-[32px] text-white items-center justify-center px-4 cursor-pointer'>Generate Report</button>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-lg bg-white border-1-[4px] border-[#4e73df]'>
          <div>
            <h2 className='text-[#b5b9df] text-lg font-bold '>Earnings Monthly</h2>
            <h1 className='text-xl font-bold text-[#5a5c69] mt-[5px]'>$10,000</h1>
          </div>
          <FaRegCalendarMinus size={28} className='bg-[#]'/>
        </div>

      </div>
    </div>
  )
}

export default Visuals
