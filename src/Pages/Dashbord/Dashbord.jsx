import { useContext } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { FaSearch } from "react-icons/fa"

const Dashbord = () =>{
    const {name} = useContext(AuthContext)
    return (
        <div className="bg-base-200 mt-6 md:mt-16 p-4">
            <div className="flex justify-between">
                <div className="">
                    <form className="">
                        <input type="text" placeholder="Search" className="border-2 p-2 w-[20rem] relative rounded-l-xl outline-none focus:border focus:border-primaryColor" />
                        <button className="border-y-2 border-r-2 py-3 px-6 rounded-r-xl bg-white absolute hover:bg-base-200"><FaSearch></FaSearch></button>
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quam officiis, obcaecati excepturi non odio modi iste illum exercitationem deleniti dolores doloremque culpa reprehenderit doloribus laboriosam accusantium hic quasi inventore.</p>
            </div>
        </div>
    )
}

export default Dashbord