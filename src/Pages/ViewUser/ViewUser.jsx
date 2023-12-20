import { useState } from "react"
import { useParams } from "react-router-dom"

const ViewUser = () =>{
    
    const [userData, setUserData] = useState([])
    console.log(userData)
    const userId = useParams()
    console.log(userId.userId)

    fetch(`http://localhost:5000/user/${userId.userId}`)
        .then(res => res.json())
        .then(data => setUserData(data))

    return (
        <div>
           <h1>Hello Bangladesh.............</h1>
        </div>
    )
}


export default ViewUser