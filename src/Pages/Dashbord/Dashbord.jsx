import { useState } from "react";
import { FaBook, FaEdit, FaRegPlusSquare, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

    const [userData, setUserData] = useState([])
    const handleAddUser = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.full_name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const userData = {
            name,
            email,
            phone,
            createAt: new Date(),
            updateAt: new Date(),
        };

        try {
            const response = await fetch('http://localhost:5000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                console.log("Network request failed");
            } else {
                // Handle successful response
                toast.success("User successfully added to the database!");
                form.reset()
            }
        } catch (error) {
            console.error("Error adding user:", error.message);
            // Handle error, e.g., show an error message.
        }
    };


    fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUserData(data))


    return (
        <div className="bg-base-200 mt-6 md:mt-16 p-4">
            <ToastContainer />
            <div className="flex justify-between">
                <div className="">
                    <form className="">
                        <input type="text" placeholder="Search" className="border-2 p-2 w-[20rem] relative rounded-l-xl outline-none focus:border focus:border-primaryColor" />
                        <button className="border-y-2 border-r-2 py-3 px-6 rounded-r-xl bg-white absolute hover:bg-base-200"><FaSearch /></button>
                    </form>
                </div>
                <div className="">
                    <select name="" id="" className="border-2 p-2 w-[20rem] rounded-lg outline-none focus:border focus:border-primaryColor">
                        <option value="">All</option>
                        <option value="">A-Z</option>
                        <option value="">Z-A</option>
                        <option value="">Last Modified</option>
                        <option value="">Last Insert</option>
                    </select>
                </div>
            </div>
            <div className="bg-base-200">

            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="w-/12 h-36 flex justify-center mt-2 items-center border border-primaryColor rounded-md">
                    <FaRegPlusSquare onClick={() => document.getElementById('my_modal_1').showModal()} className="text-[56px] hover:text-primaryColor" />
                </div>

                {
                    userData.slice(0, 2).map(user => <div key={user._id} className="relative">
                        <div className="w-/12 my-2 bg-green-200 p-2 rounded-lg">
                            <p className="mb-2"><span className="font-bold">Name:</span> {user.name}</p>
                            <p className="mb-2"><span className="font-bold">Email:</span> {user.email}</p>
                            <p className="mb-2"><span className="font-bold">Phone:</span> {user.phone}</p>
                            <p><span className="font-bold">Created at:</span> {user.createAt}</p>
                        </div>
                        <div className="absolute top-4 right-6">
                            <div className="my-2 text-lg bg-[#5cb95c] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link to={`/view-user/${user._id}`}><FaBook></FaBook></Link>
                            </div>
                            <div className="my-2 text-lg bg-[#f0a942] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link><FaEdit></FaEdit></Link>
                            </div>
                            <div className="my-2 text-lg bg-[#ce403b] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link><FaTrashAlt></FaTrashAlt></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
                {
                    userData.slice(2,).map(user => <div className="relative" key={user._id}>
                        <div className="w-/12 my-2 bg-green-200 p-2 rounded-lg">
                            <p className="mb-2"><span className="font-bold">Name:</span> {user.name}</p>
                            <p className="mb-2"><span className="font-bold">Email:</span> {user.email}</p>
                            <p className="mb-2"><span className="font-bold">Phone:</span> {user.phone}</p>
                            <p><span className="font-bold">Created at:</span> {user.createAt}</p>
                        </div>
                        <div className="absolute top-4 right-6">
                            <div className="my-2 text-lg bg-[#5cb95c] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link to={`/view-user/${user._id}`}><FaBook></FaBook></Link>
                            </div>
                            <div className="my-2 text-lg bg-[#f0a942] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link><FaEdit></FaEdit></Link>
                            </div>
                            <div className="my-2 text-lg bg-[#ce403b] text-white p-1.5 rounded hover:cursor-pointer">
                                <Link><FaTrashAlt></FaTrashAlt></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>


            {/* add user modal  */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Add User</h3>
                    <div>
                        <form onSubmit={handleAddUser}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Full Name</span>
                                </div>
                                <input type="text" placeholder="Full name" name="full_name" className="input input-bordered w-full" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" required />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Phone Number</span>
                                </div>
                                <input type="text" placeholder="Phone number" name="phone" className="input input-bordered w-full" required />
                            </label>
                            <label className="form-control w-full mt-4">
                                <input type="submit" value="Add User" className="input input-bordered w-full bg-primaryColor text-white py-3 rounded-md hover:bg-secondaryColor" />
                            </label>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={() => setModalOpen(false)}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default Dashboard;
