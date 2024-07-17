import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>
    <div className="w-full">
      <Image src={rocketImage} alt="loader" className="w-16 h-16 mx-auto"/>
    </div>
  </>
}
