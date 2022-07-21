
import "./RegisterButton.scss"
import { useAuth0 } from "@auth0/auth0-react"



export const RegisterButton = () => {
    const { loginWithRedirect} = useAuth0();

    return <button onClick={()=> loginWithRedirect()}>Registrate</button>
};



