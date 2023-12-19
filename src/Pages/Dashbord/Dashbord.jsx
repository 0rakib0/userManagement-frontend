import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const Dashbord = () =>{
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-4xl">This is home page</h2>
            {name}
        </div>
    )
}

export default Dashbord