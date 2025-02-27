"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const items = [
  {
    title: "food",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 500,
    final: 6000,
  },
  {
    title: "transportation",
    url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 800,
    final: 1020,
  },
  {
    title: "entertainment",
    url: "https://images.unsplash.com/photo-1481328101413-1eef25cc76c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 700,
    final: 1050,
  },
  {
    title: "healthcare",
    url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 160,
    final: 200,
  },
  {
    title: "education",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 180,
    final: 800,
  },
  {
    title: "shopping",
    url: "https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 900,
    final: 1080,
  },
  {
    title: "other",
    url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 20,
    final: 50,
  },
]

const chartData = items.map(item => ({
  browser: item.title,
  visitors: item.initial + item.final,
  fill: `var(--color-${item.title})`
}))

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  food: {
    label: "food",
    color: "red",
  },
  transportation: {
    label: "transportation",
    color: "blue",
  },
  entertainment: {
    label: "entertainment",
    color: "green",
  },
  healthcare: {
    label: "healthcare",
    color: "orange",
  },
  education: {
    label: "education",
    color: "purple",
  },
  shopping: {
    label: "shopping",
    color: "pink",
  },
  other: {
    label: "other",
    color: "yellow",
  },
}

export function Componentp() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col m-0 p-0 border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" nameKey="browser" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          ${totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}