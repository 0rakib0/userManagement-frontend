import { createContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"

const Register = () => {

    const { createUser } = createContext(AuthContext)
    console.log(createUser)

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

        createUser()
            .then(result => {
                const user = result.user
                console.log(user)
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
                        <div className="flex gap-2">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">FUll Name</span>
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
                                <input type="Password" name="password" placeholder="Password" className="input input-bordered w-full" required />
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