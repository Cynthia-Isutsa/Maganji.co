import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from '../App'
import Visuals from "../components/Visuals"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />} >
               <Route index element={<Visuals />} /> 
               </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
