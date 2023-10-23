
import Dashboardview from "./components/Dashboardview"
import Sidebar from "./components/Sidebar"
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <div className="flex h-[100vh]">
      <div className='basis-[12%] border'><Sidebar /></div>
      <div className='basis-[88%] border'>
        <Dashboardview />
      <div><Outlet /></div>
      </div>

    </div>
  )
}

export default App
