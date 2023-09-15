import { HiMiniArrowUpRight, HiMiniArrowDownLeft } from "react-icons/hi2";
import { TbCash } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";

export const CardLgComponent = () =>
{
    return (
        <div className="bg-purple-700 w-1/3 rounded-2xl  text-white" >
            <div className="flex justify-between p-6 text-3xl ">
                <button className="bg-purple-900 rounded-lg  p-2"><TbCash /></button>
                <button className="bg-purple-500 rounded-lg  p-2"><BsThreeDots/></button>
            </div>

            <div className="p-6 pt-10">

                <div className="flex items-center ">

                    <span className="text-2xl font-semibold pr-2"> $500.00</span>
                    <span className="bg-purple-400 rounded-full text-xl "><HiMiniArrowUpRight /></span>

                </div>
                <div className="flex items-center ">
                    <p className="text-sm text-slate-300 font-medium ">Total Earning</p>
                </div>
            </div>

        </div>
    )
}
