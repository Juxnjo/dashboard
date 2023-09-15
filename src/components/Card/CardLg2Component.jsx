import { IoBagHandleOutline } from "react-icons/io5";
import { HiMiniArrowDownLeft } from "react-icons/hi2";

export const CardLg2Component = () =>
{
    return (
        <div className="bg-blue-500 w-1/3 rounded-2xl  text-white " >
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
    )
}
