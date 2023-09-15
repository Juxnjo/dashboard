import { HiMiniArrowUpRight, HiMiniArrowDownLeft } from "react-icons/hi2";
import { TbCash } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";

export const CardLgComponent = () =>
{
    return (
        <div className="flex ">
            <div className="bg-purple-700 w-1/3 rounded-2xl text-white mr-10" >
                <div className="flex justify-between p-6 text-2xl ">
                    <button className="bg-purple-900 rounded-lg  p-2"><TbCash /></button>
                    <button className="bg-purple-500 rounded-lg  p-2"><BsThreeDots /></button>
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
            <div className="bg-blue-500 w-1/3 rounded-2xl  text-white" >
                <div className="flex justify-between p-6 ">
                    <button className="bg-blue-900  text-2xl rounded-lg  p-2"><IoBagHandleOutline /></button>
                    <div>
                        <button className="bg-blue-500  text-xs p-2">Month</button>
                        <button className="bg-blue-300 hover:bg-blue-500 rounded-lg text-xs p-2">Year</button>
                    </div>
                </div>

                <div className="p-6 pt-10">

                    <div className="flex items-center ">

                        <span className="text-2xl font-semibold pr-2"> $961</span>
                        <span className="bg-blue-400 rounded-full text-xl "><HiMiniArrowDownLeft /></span>

                    </div>
                    <div className="flex items-center ">
                        <p className="text-sm text-slate-300 font-medium ">Total Order</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
