import { BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const data = [
    { month: "Jan", Profit: 10, Loss: 60 },
    { month: 'Feb', Profit: 25, Loss: 70 },
    { month: 'Mar', Profit: 15, Loss: 65 },
    { month: 'Apr', Profit: 35, Loss: 85 },
    { month: 'May', Profit: 12, Loss: 48 },
    { month: 'Jun', Profit: 30, Loss: 69 },
    { month: 'Jul', Profit: 15, Loss: 78 },
]


export const SimpleBarCharts = () =>
{
    return (
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart data={ data } width={ 500 } height={ 300 } margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
                <CartesianGrid strokeDasharray="4 1 2" />
                <XAxis dataKey="month"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Loss" fill="#6b48ff"/>
                <Bar dataKey="Profit" fill="#1ee3cf"/>
            </BarChart>


        </ResponsiveContainer>
    )
}
