import React, {useState} from "react";
import "./loginstyles.css"
import {useNavigate} from "react-router-dom"
//import {AiFillLock, AiOutlineUser, AiOutlineShop} from "react-icons/ai";

// import api
//import logoImage from "../../assets/LogoLogin3.png"
import logoImage from "../../assets/ErisTransparente.png"

/*
function Login(){

const navigate = useNavigate();

async function login (){
    try {
        navigate("/home")
    } 
    catch (err) {
        alert('Não foi possível fazer o logout ' + err);
    }
}
*/
const Login = () => {
    const [filialUsuario, setFilialUsuario] = useState(2);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login (event) {
        event.preventDefault();
        
        const data = {
            userName, password, filialUsuario
        }

        try {
            //const response = await api.post('api/Vendedores/logarVendedor', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('filialUsuario', filialUsuario);
            //localStorage.setItem('token', response.data.token);
            //localStorage.setItem('expiration', response.data.expiration);

            navigate('/home');
        }
        catch(error) {
            alert('O login falhou ' + error);
        }
    }
/*
    return(
        <div>
            <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="Login" id="img1" />
                <form onSubmit={login}>
                    <h1>Login Eris Sistemas</h1>
                    <input placeholder="Código da Filial" 
                        value={filialUsuario}
                        onChange={e=>setFilialUsuario(e.target.value)}
                    />

                    <input placeholder="Usuário" 
                        value={userName}
                        onChange={e=>setUserName(e.target.value)}
                    />

                    <input type="password" placeholder="Password" 
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                    />

                    <button className="button" type="submit"> Login </button>

                </form>
            </section>
            </div>
        </div>
    )
*/
return(
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem-vindo(a)</span>

            <span className="login-form-title">
              <img src={logoImage} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <input
                className={filialUsuario !== "" ? "has-val input" : "input"}
                type="filial"
                value={filialUsuario}
                onChange={(e) => setFilialUsuario(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Filial"></span>
            </div>

            <div className="wrap-input">
              <input
                className={userName !== "" ? "has-val input" : "input"}
                type="email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={login}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
)
}

export default Login;