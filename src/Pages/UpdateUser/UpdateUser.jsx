import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2"

const UpdateUser = () => {

    const naviget = useNavigate()
    const [userData, setUserData] = useState([])

    const userId = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/user/${userId.userId}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])


    const handlUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.full_name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const updateData = {
            name,
            email,
            phone,
            updateAt: new Date()
        }
        fetch(`http://localhost:5000/update-user/${userId.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "User Successfully update",
                        text: "User update success",
                        icon: "success"
                    });
                    naviget('/')
                }
                
            })
    }


    return (
        <div className="w-10/12 md:w-6/12 bg-green-200 mx-auto md:mt-12 p-4 rounded-md">
            <h1 className="text-xl font-bold text-center my-2 uppercase">Update User</h1>
            <form onSubmit={handlUpdate}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Full Name</span>
                    </div>
                    <input type="text" defaultValue={userData.name} name="full_name" className="input input-bordered w-full" required />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Email</span>
                    </div>
                    <input type="email" defaultValue={userData.email} name="email" className="input input-bordered w-full" required />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Phone Number</span>
                    </div>
                    <input type="text" defaultValue={userData.phone} name="phone" className="input input-bordered w-full" required />
                </label>
                <label className="form-control w-full mt-4">
                    <input type="submit" value="Update User" className="input input-bordered w-full bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor" />
                </label>
            </form>
        </div>
    )
}

export default UpdateUser