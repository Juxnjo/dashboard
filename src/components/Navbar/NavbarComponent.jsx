import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";

export const NavbarComponent = () =>
{
    return (
        <div className="bg-slate-50 w-full ">
            <div className="flex items-stretch h-24 p-6 ">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">NAVBAR</span>
                    <div className="relative p-20 ">
                        <div className=" text-purple-500 hover:bg-purple-200 rounded-lg p-2">
                            <span className="text-xl "><GiHamburgerMenu /> </span>
                        </div>

                    </div>
                    <div className="">
                        <input type="search" placeholder="Search" />
                    </div>

                </div>
            </div>
        </div>
    )
}
