import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";

export const NavbarComponent = () =>
{
    return (
        <div className="bg-slate-50 w-full ">
            <div className="flex items-stretch h-24 p-6 ">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">NAVBAR</span>
                    <div className="relative p-20 ">
                        <div className=" text-purple-400 hover:bg-purple-200 rounded-lg p-2">
                            <span className="text-xl "><GiHamburgerMenu /> </span>
                        </div>
                    </div>
                    <div className="w-full max-w-xs mx-auto p-1 ">
                        <div className="relative text-gray-600 ">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className="bg-slate-200 h-10 px-5 pr-40 rounded-lg text-sm focus:outline-purple-300 mr-0"
                            />               
                        </div>
                    </div>
                    <div className="relative  ">
                        <button className="bg-slate-200 h-10 px-5 mt-0 text-purple-400 hover:bg-purple-200 rounded-lg"><BsSearch/></button>
                    </div>
                    <div>
                        <GrNotification/>
                    </div>

                </div>
            </div>
        </div>
    )
}
