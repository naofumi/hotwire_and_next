"use client"

import EditModal from "@/app/modal_app_client/components/EditModal";
import {useState} from "react";

export default function ModalSwitcher() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="flex justify-center mt-16">
      <button
        className="border bg-orange-600 rounded text-white p-2"
        onClick={() => setIsModalOpen(true)}
      >
        Show Modal (React server component/ client component)
      </button>
      {isModalOpen &&
        <EditModal closeModal={closeModal}/>
      }
    </div>
  )
}
