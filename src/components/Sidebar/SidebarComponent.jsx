import { LuClock2 } from "react-icons/lu";
import { GoKey } from "react-icons/go";
import { TbTypography } from "react-icons/tb";
import { VscSymbolColor } from "react-icons/vsc";
import { TbShadow, TbWindmill } from "react-icons/tb";
import { PiGoogleChromeLogo } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const SidebarComponent = () =>
{
    return (
        <div className="bg-slate-50 w-1/5 pt-6 ">
            <div className="p-6 ">
                <h1 className="flex font-bold">Dashboard</h1>

                <div className="flex items-center p-6 ">
                    <span className="text-xl"><LuClock2 /></span>
                    <span className="pl-4"> Dashboard</span>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 " />
            </div>
            <div className="p-6 ">
                <h1 className="flex font-bold">Pages</h1>
                <h5 className="flex text-sm text-slate-400 font-medium">Pages Caption</h5>
                <div className="flex items-center p-6 ">
                    <span className="text-xl"><GoKey /></span>
                    <span className="pl-4">
                        <div className="dropdown inline-block relative">
                            <button className="inline-flex items-center">
                                <span className="mr-1">Authentication</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </button>
                            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                <li className=""><a className="rounded-t bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                                <li className=""><a className="bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                                <li className=""><a className="rounded-b bg-slate-200 hover:bg-slate-400 py-2 px-4 block whitespace-no-wrap" href="#">Three </a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <hr className="h-px my-4 bg-gray-200 border-0 " />
            </div>
            <div className="p-6 ">
                <h1 className="flex font-bold">Utilities</h1>
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><TbTypography /></span>
                        <span className="pl-4 mn "> Typography</span>
                    </div>
                </div>
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><VscSymbolColor /></span>
                        <span className="pl-4 mn "> Color</span>
                    </div>
                </div>
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><TbShadow /></span>
                        <span className="pl-4 mn "> Shadow</span>
                    </div>
                </div>
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><TbWindmill /></span>
                        <span className="pl-4 mn "> Icons</span>
                    </div>
                </div>


                <hr className="h-px my-4 bg-gray-200 border-0 " />
            </div>
            <div className="p-6 ">
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><PiGoogleChromeLogo /></span>
                        <span className="pl-4 mn "> Sample Page</span>
                    </div>
                </div>
                <div className="flex items-center p-6  ">
                    <div className="flex items-center pb-0">
                        <span className="text-xl"><AiOutlineQuestionCircle /></span>
                        <span className="pl-4 mn "> Documentation</span>
                    </div>
                </div>

            </div>


        </div>
    )
}
