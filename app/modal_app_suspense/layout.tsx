import ModalTechNav from "@/components/modal/TechNav";
import Modal from "@/app/modal_app/components/Modal";
import Link from "next/link";
import React, {ReactNode} from "react";
import {cookies} from "next/headers";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getGreeting() {
  "use server"
  /* We mimic database access by storing data in cookies */
  const greeting = cookies().get("greeting")?.value as string | undefined;
  return greeting
}

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
export default async function ModalAppLayout({children}: { children: ReactNode }) {
  const greeting = await getGreeting()

  return(
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <ModalTechNav selected={`server_component`}/>
      <div className="mt-24">
        <div className="mb-2 text-center">
          <div className="text-base font-bold">current greeting:</div>
          <h3 className="text-3xl font-bold">{greeting}</h3>
          <input type="hidden" value={greeting} />
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/modal_app_suspense/show_modal"
            className="border bg-orange-600 rounded text-white p-2"
            scroll={false}
          >
            Show Modal (React server component)
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}
