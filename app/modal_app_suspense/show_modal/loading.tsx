import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";
import Modal from "@/app/modal_app_suspense/components/Modal";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <>
    <Modal>
      <div className="w-full mt-6">
        <Image src={rocketImage} alt="loader" className="w-16 h-16 mx-auto"/>
      </div>
    </Modal>
  </>
}
