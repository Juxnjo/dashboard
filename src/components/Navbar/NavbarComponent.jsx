import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";




export const NavbarComponent = () =>
{
    return (
        <div className="bg-slate-50 w-full">
            <div className="flex items-stretch h-24 p-6">
                <div className="flex items-center justify-between w-full">
                    <Link to={ '/' } className="flex items-center text-2xl font-bold"> 
                    <span><img className="h-10" src="/src/assets/logo.png" alt="logo" /></span>
                    BERRY</Link>

                    <div className="relative p-2">
                        <div className="text-purple-400 bg-purple-200 hover:bg-purple-300 rounded-xl p-2">
                            <span className="text-xl"><GiHamburgerMenu /></span>
                        </div>
                    </div>
                    <div className="w-full max-w-xs mx-auto">
                        <div className="flex items-stretch text-purple-400 ">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className="bg-slate-200 h-10 px-5 pr-40 rounded-l-xl text-sm focus:outline-purple-300  "
                            />
                            <button className="bg-purple-200 hover:bg-purple-200 rounded-r-xl p-2"><BsSearch /></button>
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="flex items-center ml-4 text-purple-400 bg-purple-200 hover:bg-purple-300 rounded-xl p-2 ">

                            <button className="text-2xl"><IoIosNotificationsOutline /></button>

                        </div>
                    </div>
                    <div className="flex text-xl bg-slate-200 p-2 rounded-full text-blue-400">
                        <Link to={ '/profile' } className="pr-2"><FaUserCircle /></Link>
                        <Link to={ 'dashboard' }><FiSettings /></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
