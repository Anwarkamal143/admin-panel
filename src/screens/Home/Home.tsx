import { FeaturedInfo, Chart, WidgetLg, WidgetSm } from "@components"
import { HomeContainer, HomeWidget } from "./home.styled"
const sampleData = [
    {
        name: "Jan",
        "Active user": 1000,
    },
    {
        name: "Feb",
        "Active user": 3000,
    },
    {
        name: "Mar",
        "Active user": 7000,
    },
    {
        name: "Apr",
        "Active user": 4000,
    },
    {
        name: "May",
        "Active user": 5000,
    },
    {
        name: "Jun",
        "Active user": 11000,
    },
    {
        name: "Jul",
        "Active user": 8000,
    },
    {
        name: "Agu",
        "Active user": 3000,
    },
    {
        name: "Sep",
        "Active user": 5000,
    },
    {
        name: "Oct",
        "Active user": 2000,
    },
    {
        name: "Nov",
        "Active user": 11000,
    },
    {
        name: "Dec",
        "Active user": 6000,
    },
]
export function Home() {
    return (
        <HomeContainer>
            <FeaturedInfo />
            <Chart
                title={"Sales Analytics"}
                data={sampleData}
                dataKey="name"
                xaxis="Active user"
            />
            <HomeWidget>
                <WidgetSm />
                <WidgetLg />
            </HomeWidget>
        </HomeContainer>
    )
}
