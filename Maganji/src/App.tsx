import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


const App = () => {
  return (
    <div className="flex h-[100vh]">
      <div className='basis-[12%] border'><Sidebar /></div>
      <div className='basis-[88%] border'><Header /></div>

    </div>
  )
}

export default App
