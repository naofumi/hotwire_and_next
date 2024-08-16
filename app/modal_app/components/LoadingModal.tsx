import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";
import React from "react";
import Modal from "@/app/modal_app/components/Modal";

export default function LoadingModal() {
  return (
    <Modal>
      <div className="flex justify-evenly w-full w-96 mt-12 mb-12">
        <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
      </div>
    </Modal>
  )
}
