import { SimpleBarCharts } from "../Recharts/SimpleBarCharts"

export const CardXlComponent = () =>
{
    return (
        <div className=" barStats bg-slate-50 mt-10 rounded-2xl">
            <div className="p-5 pb-10 ">
                <h1 className="text-sm font-semibold text-slate-400">Total Growth</h1>
                <p className="font-bold text-xl">$2,214.00</p>

            </div>
            <SimpleBarCharts />
        </div>
    )
}
