import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { DataKey } from "recharts/types/util/types"

import { ChartContainer, ChartTitle } from "./chart.styled"
// const sampleData = [
//   {
//     name: 'Jan',
//     'Active user': 1000,
//   },
//   {
//     name: 'Feb',
//     'Active user': 3000,
//   },
//   {
//     name: 'Mar',
//     'Active user': 7000,
//   },
//   {
//     name: 'Apr',
//     'Active user': 4000,
//   },
//   {
//     name: 'May',
//     'Active user': 5000,
//   },
//   {
//     name: 'Jun',
//     'Active user': 11000,
//   },
//   {
//     name: 'Jul',
//     'Active user': 8000,
//   },
//   {
//     name: 'Agu',
//     'Active user': 3000,
//   },
//   {
//     name: 'Sep',
//     'Active user': 5000,
//   },
//   {
//     name: 'Oct',
//     'Active user': 2000,
//   },
//   {
//     name: 'Nov',
//     'Active user': 11000,
//   },
//   {
//     name: 'Dec',
//     'Active user': 6000,
//   },
// ]
export type ChartType<T> = {
    title?: string
    data: T[]
    dataKey: keyof T
    xaxis: keyof T
    grid?: boolean
    className?: string
}
export function Chart<T>(props: ChartType<T>) {
    const { grid = true, dataKey, data, title, xaxis } = props
    return (
        <ChartContainer>
            <ChartTitle> {title || "Analytics"} </ChartTitle>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data || []}>
                    {grid && (
                        <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />
                    )}
                    <XAxis
                        dataKey={dataKey as DataKey<typeof dataKey>}
                        stroke="#5550bd"
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey={xaxis as DataKey<typeof xaxis>}
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}
