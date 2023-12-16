import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="min-h-screen bg-base-200 mt-6 rounded-lg border-2 border-primaryColor m-5 p-2">
            <div className="flex mx-auto">
                <div className="text-center w-6/12">
                    <img src="https://www.shutterstock.com/image-vector/modern-flat-illustration-data-analytics-600w-2199640193.jpg" className="h-full my-2" alt="" />
                </div>
                <div className="shadow-xl w-3/4 bd-green-500 m-2 pb- grow">
                    <form className="card-body">
                        <h4 className="text-center text-2xl">LOGIN </h4>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">FUll Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full" required />
                            </div>
                        
                                                
                        <div className="form-control mt-6">
                            <button className="bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor">Register</button>
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