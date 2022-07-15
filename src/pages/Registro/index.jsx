
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
            <p>Username</p>
            <input type="USERNAME" />
            <p>Password</p>
            <input type="CONTRASEÑA" />
            <div>
                <button className="Enter">Entrar</button>
            </div>
            <div>
            <p>Usuario Nuevo</p>
                <button>Registrate</button>
            </div>
            <div>
                <img src="" alt="Logo de foodlink aqui" className="Logo" />
            </div>
        </div>
    </div>
    )
}

