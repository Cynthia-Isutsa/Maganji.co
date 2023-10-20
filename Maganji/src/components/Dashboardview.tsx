import { FaRegBell, FaRegEnvelope, FaSearch } from "react-icons/fa"
import image1 from '../assets/image1.jpg'



const Dashboardview = () => {
  return (
    <div className='py-2 flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
      <div className='flex items-center rounded-lg'>
        <input type="text" placeholder='Search for....' className='bg-gray-300 h-[40px] outline-none pl-4 w-[350px] rounded-sm placeholder:text-xl font-normal'/>
        <div className='bg-[#4E73DF] h-[40px] px-3 flex items-center justify-center cursor-pointer rounded-sm '>
            <FaSearch size={22} className= 'fill-white'/>
        </div>
      </div>

      <div className='flex items-center gap-[15px] relative'>
        <div className="flex items-center gap-[25px] border-r-[1px] border-red-700 pr-[25px]">
          <FaRegBell  />
          <FaRegEnvelope />
        </div>
        <div className='flex items-center gap-5 relative '>
        <p>Cynthia Isutsa</p>
        <div className="h-[50px] w-[50px] rounded-full cursor-pointer items-center justify-center relative">
          <img src={image1} alt='profile' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboardview
