"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle } from "@/components/ui/Card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function getAccess() {
  return (
    <div className="pt-20 w-full h-full justify-center align-center">
      <div className="grid md:grid-cols-2 gap-20 grid-flow-row">
        <div className="flex flex-col w-full justify-start align-center space-y-5">
          <Badge variant="outline" className="border-[#7DEE2D]">Early Access</Badge>
          <h1 className="font-bold text-5xl">Be Among the First to Access Paldo</h1>

          <div className="grid gap-8 mt-10">
            <div className="flex flex-row">
              <span className="text-[#7DEE2D] mr-4 text-lg font-bold">•</span>
              <div className="">
                <h1 className="font-semibold text-lg">Free, Early Access</h1>
                <p className="text-gray-400">Get an inside look at Paldo before anyone else and experience our next-gen tools for CEOs, founders, and business leaders.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-[#7DEE2D] mr-4 text-lg font-bold">•</span>
              <div className="">
                <h1 className="font-semibold text-lg">Influence Our Roadmap</h1>
                <p className="text-gray-400">Share your insights directly with our product team and help shape the features you care about most.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-[#7DEE2D] mr-4 text-lg font-bold">•</span>
              <div className="">
                <h1 className="font-semibold text-lg">Stay One Step Ahead</h1>
                <p className="text-gray-400">Gain an unfair advantage over your competitors by uncovering market shifts before they hit the mainstream.</p>
              </div>
            </div>
            <div className="flex flex-row">
              <span className="text-[#7DEE2D] mr-4 text-lg font-bold">•</span>
              <div className="">
                <h1 className="font-semibold text-lg">No Commitments, No Fees</h1>
                <p className="text-gray-400">Signing up is risk-free—no payment, no long-term commitment. Simply join, explore, and decide if Paldo is right for you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center align-center m-auto w-full">
          <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Get Early Access</CardTitle>
                <CardDescription>We will contact you as soon as possible!</CardDescription>
            </CardHeader>
            <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-row space-x-3">
                    <Input id="fname" placeholder="First Name" />
                    <Input id="lname" placeholder="Last Name" />
                </div>
                <div className="flex flex-col">
                  <Input id="email" placeholder="Email" />
                </div>
                <Button variant={"default"} className="mt-5 cursor-pointer drop-shadow-[0_5px_5px_rgba(40, 40, 150, 1)]">Submit</Button>
              </div>
            </form>
            </CardContent>
            <CardFooter>
              
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
