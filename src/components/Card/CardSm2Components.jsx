import { BsShopWindow } from "react-icons/bs";

export const CardSm2Components = () =>
{
    return (
        <div className="cardFour  bg-slate-50 rounded-2xl  text-black " >
            <div className="flex p-4 ">
                <button className="bg-yellow-100  text-3xl rounded-lg  p-2 text-orange-300"><BsShopWindow /></button>
                <div className="ml-4 ">
                    <span className="text-2xl font-semibold pr-2 "> $203k</span>
                    <p className="text-sm text-slate-500 font-medium ">Total Income</p>
                </div>
            </div>
        </div>
    )
}
