const Register = () => {
    return (
        <div className="min-h-screen bg-base-200 mt-6 rounded-lg border-2 border-primaryColor m-5">
            <div className="flex mx-auto">
                <div className="text-center w-6/12">
                    <img src="https://www.shutterstock.com/image-vector/modern-flat-illustration-data-analytics-600w-2199640193.jpg" className="h-full my-2" alt="" />
                </div>
                <div className="shadow-2xl w-3/4 bd-green-500 m-2">
                    <form className="card-body">
                        <h4 className="text-center text-2xl">REGISTER</h4>
                        <div className="flex gap-2">
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
                        </div>
                        <div className="flex gap-2">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                            </div>
                            <div className="w-full">
                                <label className="form-control w-full max-w-xs">
                                    <div className="label">
                                        <span className="label-text">City</span>
                                    </div>
                                    <select className="select select-bordered">
                                        <option disabled hidden selected>--SELECT--</option>
                                        <option>Mumbai</option>
                                        <option>Pune</option>
                                        <option>Ahmedabad</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="w-full">
                                <label className="label">
                                    <span className="label-text">State</span>
                                </label>
                                <input type="text" placeholder="State" className="input input-bordered w-full" required />
                            </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span>Male</span><input type="radio" name="radio-5" className="radio radio-success" checked />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Femal</span><input type="radio" name="radio-5" className="radio radio-success" />
                                </div>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register