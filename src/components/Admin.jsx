import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Admin() {
    const {user} = useAuthContext;
    if(!user){
        return(
            <Navigate to="/login" replace></Navigate>
        )
    }
    return(
        <div>
            <p>Componente Admin</p>
        </div>
    )
}

export default Admin;