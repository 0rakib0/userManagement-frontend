import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import Swal from "sweetalert2"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const naviget = useNavigate()

    const [showpasswords, setShowPassword] = useState(false)

    const showPassword = () => {
        setShowPassword(!showpasswords)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value

        signIn(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    title: "Accout successfully Login",
                    text: `${user.email} succesfully login`,
                    icon: "success"
                });
                naviget('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="min-h-screen bg-base-200 mt-6 rounded-lg border-2 border-primaryColor m-5 p-2">
            <div className="flex mx-auto">
                <div className="text-center w-6/12">
                    <img src="https://www.shutterstock.com/image-vector/modern-flat-illustration-data-analytics-600w-2199640193.jpg" className="h-full my-2" alt="" />
                </div>
                <div className="shadow-xl w-3/4 bd-green-500 m-2 pb- grow">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h4 className="text-center text-2xl font-bold">LOGIN </h4>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" required />
                        </div>

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

                        <div className="form-control mt-6">
                            <button className="bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor">Login</button>
                        </div>
                        <button className="bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor">Login With Google</button>
                        <p className="text-center pb-3">Do not have account? <Link to='/register' className="text-primaryColor">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login