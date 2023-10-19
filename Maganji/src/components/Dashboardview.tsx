import { FaSearch } from "react-icons/fa"


const Dashboardview = () => {
  return (
    <div>
      <div className='flex items-center rounded-lg'>
        <input type="text" />
        <div>
            <FaSearch />
        </div>
      </div>
    </div>
  )
}

export default Dashboardview
