import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {

    const { createUser, user, Logout } = useContext(AuthContext)
    const [showpasswords, setShowPassword] = useState(false)

    const showPassword = () => {
        setShowPassword(!showpasswords)
    }

    const naviget = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const phone = form.phone.value
        const city = form.city.value
        const state = form.state.value
        const gender = form.gender.value

        const userInfo = {
            name,
            email,
            password,
            phone,
            city,
            state,
            gender
        }

        createUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Account successfully register!",
                    text: "Your account successfully register please login!",
                    icon: "success"
                });
                Logout()
                naviget('/login')

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div className="min-h-screen bg-base-200 mt-6 rounded-lg border-2 border-primaryColor m-5 p-4">
            <div className="flex mx-auto">
                <div className="text-center w-6/12">
                    <img src="https://www.shutterstock.com/image-vector/modern-flat-illustration-data-analytics-600w-2199640193.jpg" className="h-full 1z-1 my-2" alt="" />
                </div>
                <div className="shadow-2xl w-3/4 bd-green-500 m-2">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h4 className="text-center text-2xl">REGISTER</h4>
                        {user?.email}
                        <div className="flex gap-2">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" name="name" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showpasswords ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered w-full" required />
                                    <div className="absolute top-4 right-4">
                                        {showpasswords ? <FaRegEye onClick={showPassword} className="text-lg"></FaRegEye> :
                                            <FaRegEyeSlash onClick={showPassword} className="text-lg"></FaRegEyeSlash>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">City</span>
                                </div>
                                <select name="city" className="select select-bordered">
                                    <option disabled hidden selected>--SELECT--</option>
                                    <option>Mumbai</option>
                                    <option>Pune</option>
                                    <option>Ahmedabad</option>
                                </select>
                            </label>
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">State</span>
                            </label>
                            <input type="text" name="state" placeholder="State" className="input input-bordered w-full" required />
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span>Male</span><input type="radio" value='male' name="gender" className="radio radio-success" checked />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Femal</span><input type="radio" value='female' name="gender" className="radio radio-success" />
                                </div>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor">Register</button>
                        </div>
                        <p className="text-center">Already have account? <Link to='/login' className="text-primaryColor">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register