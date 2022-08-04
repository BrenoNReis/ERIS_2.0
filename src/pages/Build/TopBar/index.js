import React, {useState} from "react";
import './topbarstyles.css'

import {useNavigate, Link} from "react-router-dom"
import {AiOutlineImport} from "react-icons/ai";
import ERISLOGO from "../../../assets/ERISLOGO.png"

function TopBar(){
    const[active, SetActive] = useState('nav_menu');
    const navToggle = () =>{
        active === "nav_menu"
        ? SetActive("nav_menu nav_active")
        : SetActive("nav_menu")
    }

const navigate = useNavigate();

/*
    const userName =localStorage.getItem('userName');
    const token =localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
*/

async function logout () {
        try {
            navigate('/');
        }
        catch(err){
            alert('Não foi possível fazer o logout ' + err);
        }
    }

    return(
        <nav className="nav">
            <a className="nav_img">
                <img src={ERISLOGO}/>
            </a>
            <span className="nav_welcome">Bem-vindo, </span>
            <ul className={active}>
                <li className="nav_item"><Link to="/home" className="nav_link">Home</Link></li>
                <li className="nav_item"><Link to="/clientes" className="nav_link">Clientes</Link></li>
                <li className="nav_item"><Link to="/novocliente" className="nav_link">Novo Cliente</Link></li>
                <li className="nav_item"><a href="#" className="nav_link">Portfolio</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                <button className="nav_logout" onClick={logout} type="button">
                    <AiOutlineImport size={20} color="white"/>
                </button>
            </ul>
            <div onClick={navToggle}className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default TopBar;