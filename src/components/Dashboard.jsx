import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Component } from "./ui/chart-radial-stacked";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Componentp } from "./ui/chart-pie-donut-text";
import { Button } from "./ui/button";
import ExpenseForm from "./ExpenseForm";

const items = [
  {
    title: "food",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 500,
    final: 600,
    color: "red",
  },
  {
    title: "transportation",
    url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 800,
    final: 1020,
    color: "blue",
  },
  {
    title: "entertainment",
    url: "https://images.unsplash.com/photo-1481328101413-1eef25cc76c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 700,
    final: 1050,
    color: "green",
  },
  {
    title: "healthcare",
    url: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 160,
    final: 200,
    color: "orange",
  },
  {
    title: "shopping",
    url: "https://plus.unsplash.com/premium_photo-1683147746302-f5d920cede15?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 900,
    final: 1080,
    color: "pink",
  },
  {
    title: "other",
    url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    initial: 20,
    final: 50,
    color: "yellow",
  },
];

const sub = [
  {
    title: "Youtube",
    url: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cost: 500,
  },
  {
    title: "linkedin",
    url: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cost: 700,
  },
  {
    title: "Canva",
    url: "https://images.unsplash.com/photo-1649091245823-18be815da4f7?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cost: 200,
  },
  {
    title: "Spotify",
    url: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cost: 300,
  },
];

const exp = [
  {
    title: "Youtube Subscription",
    des: "This is my expense",
    cost: 500,
  },
  {
    title: "Netflix Subscription",
    des: "Monthly subscription for Netflix",
    cost: 150,
  },
  {
    title: "Amazon Prime",
    des: "Monthly subscription for Amazon Prime",
    cost: 100,
  },
  {
    title: "Gym Membership",
    des: "Monthly gym membership fee",
    cost: 300,
  },
  {
    title: "Electricity Bill",
    des: "Monthly electricity bill",
    cost: 200,
  },
  {
    title: "Water Bill",
    des: "Monthly water bill",
    cost: 50,
  },
  {
    title: "Internet Bill",
    des: "Monthly internet bill",
    cost: 100,
  },
  {
    title: "Mobile Bill",
    des: "Monthly mobile phone bill",
    cost: 80,
  },
  {
    title: "Grocery Shopping",
    des: "Monthly grocery shopping expense",
    cost: 400,
  },
];

function Dashboard() {
  return (
    <div className="w-full h-fit p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          <Card className="p-4 h-full">
            <div className="flex flex-row">
              <div>
                <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-4">
                <CardHeader>
                  <h2 className="text-lg sm:text-xl">Good morning</h2>
                  <h2 className="text-2xl sm:text-3xl leading-none">
                    Aryan Garg
                  </h2>
                  <CardDescription className="text-sm sm:text-base">
                    24 August, Thursday
                  </CardDescription>
                </CardHeader>
              </div>
            </div>
          </Card>
          <Card className="p-4 h-full">
            <CardHeader>
              <h1 className="text-3xl sm:text-3xl font-semibold">$2,500</h1>
              <p className="text-sm sm:text-base">Total expense this month</p>
            </CardHeader>
            <CardContent>
              <Sheet>
                <SheetTrigger>
                  <Button>Add Expense</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Your Expense</SheetTitle>
                    <SheetDescription>
                      <ExpenseForm/>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </CardContent>
          </Card>
        </div>
        <div>
          <Component />
        </div>
        <div>
          <Card className={"h-fit"}>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-fit">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    Expense Distribution
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    24 August, Thursday
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[33vh] w-full rounded-md p-4 scrollbar-hide">
                    {items.map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span
                              className={`h-2 w-2 rounded-full mr-2`}
                              style={{ backgroundColor: item.color }}
                            ></span>
                            <p className="text-sm sm:text-base capitalize">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </div>
              <div className="lg:w-1/2 h-fit">
                <Componentp />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col gap-4 p-4 bg-white rounded-xl">
          <h1 className="font-semibold text-lg sm:text-xl">
            Category wise Expense
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto h-fit scrollbar-hide">
            {items.map((item, i) => (
              <div key={i}>
                <Card>
                  <CardHeader>
                    <div>
                      <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <AvatarImage src={item.url} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <CardTitle className="text-lg sm:text-xl capitalize">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-sm sm:text-base">
                      ${item.initial} out of ${item.final}
                    </p>
                    <div className="w-full">
                      <Progress value={(item.initial / item.final) * 100} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 p-4 h-[50vh] bg-white rounded-xl">
            <h1 className="font-semibold text-lg sm:text-xl">
              Recent expenses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto h-fit scrollbar-hide">
              {sub.map((item, i) => (
                <div key={i}>
                  <Card className="flex flex-row p-4">
                    <div>
                      <Avatar className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                        <AvatarImage src={item.url} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <CardHeader>
                        <CardDescription className="text-sm sm:text-base">
                          20 August, 2021
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-sm sm:text-base">
                          {item.title} Subscription
                        </p>
                        <p className="text-sm sm:text-base">${item.cost}</p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <h1 className="font-semibold text-lg sm:text-xl mb-2">
              Upcoming expenses
            </h1>
            <Table className={"w-full "}>
              <TableCaption className="text-sm sm:text-base">
                A list of your recent expenses.
              </TableCaption>
              <TableBody>
                {exp.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-sm sm:text-base">
                      20 August 2021
                    </TableCell>
                    <TableCell className="flex flex-col text-sm sm:text-base">
                      <p className="font-medium">{item.title}</p>
                      <p>{item.des}</p>
                    </TableCell>
                    <TableCell className="text-right text-sm sm:text-base">
                      ${item.cost}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
