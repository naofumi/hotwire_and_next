import Tabs from "@/app/tabbed_segments_app/components/Tabs";
import React from "react";
import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";

export default function TabbedProductsLoader() {
  return (
    <>
      <Tabs selectedTab={1}/>
      <div className="flex justify-evenly w-full mt-24 h-96 mb-48">
        <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
      </div>
    </>
)
}
