"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* PAGE 1 */ }
      <div className="h-245 pb-60 w-full grid grid-cols-[63%_37%] grid-flow-row items-center space-y-10">
        <div className="space-y-5">
          <h1 className="text-5xl font-black">Your Compass to Outsmart the Competition</h1>
          <p className="text-xl text-gray-500">The Secret Weapon for CEOs</p>
        </div>
        <div>
          <Image src="/analyze.png" alt="" width="600" height="600"/>
        </div>
      </div>

      { /* PAGE 2 */ }
      <div className="h-50 pb-60 w-full flex flex-col justify-center items-start space-y-4">
        <div className="grid grid-cols-3 gap-20">
          <Image src="/analyze.png" alt="" width="800" height="800"/>
          <Image src="/alerts.png" alt="" width="800" height="800"/>
          <Image src="/discover.png" alt="" width="800" height="800"/>
        </div>
      </div>

      { /* PAGE 3 */ }
      <div className="h-200 pb-60 w-full flex flex-col justify-center items-start space-y-4">
        <h1 className="text-7xl font-bold">The Blind Spot Businesses Can't Afford</h1>
        <p className="text-xl text-gray-500">70% of companies lose deals by underestimating competitors <br></br>or getting blindsided by unknown rivals.</p>
      </div>

      { /* PAGE 4 */ }
      <div className="h-150 pb-60 w-full flex flex-col justify-center items-start space-y-4">
        <video src="demo-video.mp4" className="rounded-3xl" autoPlay muted loop playsInline/>
      </div>


    </div>
  );
}