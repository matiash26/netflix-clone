import Home from "../pages/Home"
import Login from "../pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
export function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}