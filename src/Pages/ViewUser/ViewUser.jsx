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
        <div className="w-6/12 bg-green-200 mx-auto md:mt-12 p-4 rounded-md">
           <div>
                <p className="text-xl"><span className="font-bold">Name:</span> {userData.name}</p>
                <p className="text-xl my-4"><span className="font-bold">Email:</span> {userData.email}</p>
                <p className="text-xl"><span className="font-bold">Phone:</span> {userData.phone}</p>
           </div>
        </div>
    )
}


export default ViewUser