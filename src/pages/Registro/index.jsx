
import "./Registro.scss"

export default function Registro() {
    return (
    <div className="mainContainer">
        <div>
            <h1 className="pageTitle">
                Registro
            </h1>
            <h2>
                Usuario existente
            </h2>
        </div>
        <div>
            <p>Usuario</p>
            <input type="username" />
            <p>Contraseña</p>
            <input type="password" />
            <div>
                <button className="Enter">Entrar</button>
            </div>
            <div>
            <p>Usuario Nuevo</p>
                <button className="Enter">Registrate</button>
            </div>
            <div>
                <img src="" alt="Logo de foodlink aqui" className="Logo" />
            </div>
        </div>
    </div>
    )
}

