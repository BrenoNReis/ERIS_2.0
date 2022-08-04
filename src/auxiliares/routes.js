import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../pages/Home"
import Clientes from "../pages/Clientes"
import Login from "../pages/Login"
import NovoCliente from "../pages/NovoCliente"

function Router(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/clientes" element={<Clientes/>}/>
                    <Route path="/novocliente" element={<NovoCliente/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;