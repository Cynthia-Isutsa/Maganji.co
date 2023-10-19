import {FaTachometerAlt, FaRegSun, FaChevronRight, FaBolt, FaChevronLeft, FaWrench, FaStickyNote, FaRegCalendarAlt, FaChartBar} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-[#4E73DF] h-screen px-5'>
        <div className='py-7 flex justify-center items-center border-b-[1px] border-[#898eba]'>
          <h1 className='font-semibold text-[#f8f8ff] text-xl cursor-pointer'>Admin Panel</h1>
        </div>

        <div className='flex items-center gap-3 py-3 border-b-[1px] border-[#898eba]'>
          <FaTachometerAlt size={22} className='fill-[#f8f8ff]'/>
          <p className='text-[#F8F8FF] font-semibold text-sm'>Dashboard</p>
        </div>

        <div className='pt-3 border-b-[1px] border-[#898eba]'>
          <p className='text-sm font-extrabold text-[#eee8a9]'>INTERFACE</p>
          <div className='flex items-center justify-between gap-3 py-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
                <FaRegSun size={22} className='fill-[#f8f8ff]'/>
                <p className='text-sm text-[#f8f8ff]'>Components</p>
            </div>
            <FaChevronRight className='fill-[#f8f8ff]'/>
          </div>
          <div className='flex items-center justify-between gap-3 py-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
                <FaWrench size={22} className='fill-[#f8f8ff]'/>
                <p className='text-sm text-[#f8f8ff]'>Utilities</p>
            </div>
            <FaChevronRight className='fill-[#f8f8ff]'/>
          </div>
        </div>

        <div className='pt-3 border-b-[1px] border-[#898eba]'>
          <p className='text-sm font-extrabold text-[#eee8a9]'>ADDONS</p>
          <div className='flex items-center justify-between gap-3 py-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
                <FaStickyNote size={22} className='fill-[#f8f8ff]'/>
                <p className='text-sm text-[#f8f8ff]'>Pages</p>
            </div>
            <FaChevronRight className='fill-[#f8f8ff]'/>
          </div>
          <div className='flex items-center justify-between gap-3 py-4 cursor-pointer'>
            <div className='flex items-center gap-2'>
              <FaChartBar size={22} className='fill-[#f8f8ff]'/>
                <p className='text-sm text-[#f8f8ff]'>Charts</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-3 py-3 cursor-pointer'>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt size={22} className='fill-[#f8f8ff]'/>
                <p className='text-sm text-[#f8f8ff]'>Tables</p>
            </div>
          </div>
        </div>
      
      <div className='flex items-center justify-center pt-3'>
        <div className='h-[40px] w-[40px] bg-[#898eba] rounded-full flex items-center justify-center cursor-pointer'>
          <FaChevronLeft size={22} className='fill-[#f8f8ff]' />
        </div>
      </div>

      <div className='bg-[#395cbf] mt-4 flex flex-col items-center justify-center py-2 px-3 gap-4 rounded-sm'>
          <FaBolt size={22} className='fill-[#f8f8ff]'/>
          <p className='text-sm font-normal text-[#f8f8ff] text-center'>We offer the best!!</p>
          <button className='bg-[#eee8a9] flex items-center justify-center h-[30px] w-full rounded-sm text-sm'>Upgrade to Pro</button>
      </div>
        
    </div>
  )
}

export default Sidebar
