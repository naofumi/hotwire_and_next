"use client"

import ModalTechNav from "@/components/modal/TechNav";
import React, {useEffect, useState} from "react";
import EditModal from "@/app/modal_app_client/components/EditModal";
import {getGreeting} from "@/app/modal_app_client/helpers/greeting";

export const dynamic = 'force-dynamic'

/*
* Goal of this demo:
*
* Implement a modal dialog using exclusively Server Components and Server Actions without
* any Client Components. The official Next.js documentation suggests a solution with Parallel routers
* and Intercepting routes. However, this is complex, and I think the following one is
* much easier to implement.
*
* The implementation below switches between modal:shown and modal:hidden by changing
* the `showModal` search parameter. Showing a modal is simply a matter of having a `Link` tag
* that points to `/modal_app?showModal=true`.
*
* The RSC payload from the `/modal_app?showModal=true` endpoint will return not only the modal,
* but also the whole page including the section that is hidden by the modal backdrop.
* The entire page including the modal will be drawn, and at the same time,
* React is clever enough to maintain browser state for the form inputs.
*
* The problem with this approach, however, is when the network response is slow. To solve this,
* we need suspense
* */

export default function ModalAppPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string | undefined>(undefined);

  useEffect(() => {
    getGreeting().then((greeting) => setGreeting(greeting));
  }, [])

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <ModalTechNav selected={`server_component`}/>
      <div className="mt-24">
        <div className="mb-2 text-center">
          <div className="text-base font-bold">current greeting:</div>
          <h3 className="text-3xl font-bold">
            {greeting}
          </h3>
        </div>

        <div className="flex justify-center mt-16">
          <button
            className="border bg-orange-600 rounded text-white p-2"
            onClick={() => setIsModalOpen(true)}
          >
            Show Modal (React server component/ client component)
          </button>
        </div>
      </div>
      {isModalOpen &&
        <EditModal closeModal={closeModal}/>
      }
    </div>
  )
}
