import React from "react";

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

function Dashboard() {
  return (
    <div className="w-full h-fit ">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <Card className={"p-4 h-[330px]"}>
            <div className="flex flex-row">
              <div>
                <Avatar className={"w-50 h-50"}>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <CardHeader>
                  <h2 className="text-xl ">Good morning</h2>
                  <h2 className="text-3xl leading-none">Aryan Garg</h2>

                  <CardDescription>24 August, Thrusday</CardDescription>
                </CardHeader>
                <CardContent className={"mt-5"}>
                  <p>Month August</p>
                  <div className="w-[10rem] mt-1">
                    <Progress value={33} className={"h-8"} />
                  </div>
                </CardContent>
                <CardFooter className={"mt-5"}>
                  <div className="flex flex-col">
                    <p>remaining days</p>
                    <ul>
                      <li>. 05 Weekdays</li>
                      <li>. 05 Weekend</li>
                    </ul>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <div>
            <Component />
          </div>
        </div>
        <div>
          <div>
            <Card>
              <div className="flex flex-row">
                <div>
                <CardHeader>
                  <CardTitle className={"text-xl"}>
                    Expence Distribution
                  </CardTitle>
                  <CardDescription>24 August, Thrusday</CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[230px] w-full rounded-md p-4 scrollbar-hide">
                    {[1, 2, 3, 4, 5].map((item) => {
                      return (
                        <div key={item}>
                          <div className="flex justify-between">
                            <p>. Category {item}</p>
                          </div>
                        </div>
                      );
                    })}
                  </ScrollArea>
                </CardContent>
                </div>
                <div>
                    <Componentp/>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 p-4">
        <div className="flex flex-col gap-4 p-4 mt-4 bg-white rounded-xl">
          <h1 className="font-semibold text-xl">Category wise Expence</h1>
          <div className="grid grid-cols-4 gap-4 overflow-y-auto h-[100%] scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <div key={item}>
                  <Card>
                    <CardHeader>
                      <div>
                        <Avatar className={"w-16 h-16"}>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <CardTitle className={"text-xl"}>
                        Category {item}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">$3600 of 3800</p>
                      <div className="w-full">
                        <Progress value={50} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 h-fit">
          <div className="flex flex-col gap-4 p-4 h-[25vh] bg-white rounded-xl">
            <h1 className="font-semibold text-xl">Category wise Expence</h1>
            <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[95%] scrollbar-hide">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div key={item}>
                    <Card className={"flex flex-row p-4"}>
                      <div>
                        <Avatar className={"w-16 h-16"}>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <CardHeader>
                          <CardDescription>20 August, 2021</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="font-semibold">linkdin Suvscrption</p>
                          <p>$300</p>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" p-4 bg-white rounded-xl">
            <div>
              <h1 className="font-semibold text-xl mb-2">
                Category wise Expence
              </h1>
              <div>
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableBody>
                    {[1, 2, 3].map((i) => {
                      return (
                        <TableRow>
                          <TableCell className="font-medium">
                            20 August 2021
                          </TableCell>

                          <TableCell className={"flex flex-col"}>
                            <p className="font-medium">linkdin Suvscrption</p>
                            <p>This is your expence</p>
                          </TableCell>

                          <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
