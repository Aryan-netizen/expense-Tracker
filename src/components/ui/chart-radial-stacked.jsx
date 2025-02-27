import { TrendingUp } from "lucide-react"
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const items = [
  {
    title: "food",
    initial: 500,
    final: 600,
  },
  {
    title: "transportation",
    initial: 800,
    final: 1020,
  },
  {
    title: "entertainment",
    initial: 700,
    final: 1050,
  },
  {
    title: "healthcare",
    initial: 160,
    final: 200,
  },
  {
    title: "education",
    initial: 180,
    final: 800,
  },
  {
    title: "shopping",
    initial: 900,
    final: 1080,
  },
  {
    title: "other",
    initial: 20,
    final: 50,
  },
]

let totalBudget = 0
let totalExpense = 0

items.forEach(i => {
  totalBudget += i.initial
  totalExpense += i.final
})

const chartData = [{ month: "January", budget: totalBudget, expense: totalExpense }]

const chartConfig = {
  budget: {
    label: "Budget",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))",
  },
}

export function Component() {
  const totalAmount = chartData[0].budget + chartData[0].expense

  return (
    <Card className="flex flex-col m-0 pb-0">
      <CardHeader className={""}>
        <CardTitle className={"text-2xl"}>Budget vs Expense</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
        <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-[250px] h-fit">
          <RadialBarChart data={chartData} endAngle={180} innerRadius={80} outerRadius={130}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">
                          {totalAmount.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">
                          out of $ {totalAmount.toLocaleString()}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="budget"
              stackId="a"
              cornerRadius={5}
              fill="blue"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="expense"
              fill="red"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardHeader>
    </Card>
  )
}