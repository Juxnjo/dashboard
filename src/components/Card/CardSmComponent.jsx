import { AiOutlineShop } from "react-icons/ai";

export const CardSmComponent = () =>
{
    return (
        <div className="cardTwo bg-blue-500 rounded-2xl  text-white " >
            <div className="flex p-6 ">
                <button className="bg-blue-900  text-3xl rounded-lg  p-2"><AiOutlineShop /></button>
                <div className="ml-4 ">
                    <span className="text-2xl font-semibold pr-2 "> $203k</span>
                    <p className="text-sm text-slate-300 font-medium ">Total Income</p>
                </div>
            </div>
        </div>
    )
}
