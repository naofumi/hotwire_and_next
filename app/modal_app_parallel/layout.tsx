import ModalTechNav from "@/components/modal/TechNav";
import Link from "next/link";
import React, {ReactNode} from "react";
import {User} from "@/repositories/user";
import UserList from "@/app/modal_app_parallel/components/UserList"

export const dynamic = 'force-dynamic'
export const revalidate = 0

/*
* Goal of this demo:
*
* This demo improves on the simple React Component one by using the Layout
* feature in App Router.
*
* To my knowledge, Server Components are limited in how you can update fragments
* of the screen, and the only way you can do this with Next.js is by using Layouts.
*
* Next.js also provides Parallel rendering, but this seems to be an
* extension of Layouts, and we will not discuss this separately.
*
* Layouts are designed for cases where the fragment being switched out is large.
* The Layout is normally just a frame around the fragment (children).
* However, since modals are typically small, we need to flip the semantics.
* The Layout will contain the bulk of the content, and the children will
* be just a small modal.
*
* The benefit of using Layouts is that we no longer have to redraw the whole
* screen when showing modals, and we now also have a Suspense boundary
* where we can put `layout.js` files to provide a loading screen.
* This `layout.js` file will also be pre-fetched, so we can show the loading
* screen instantly after a link is clicked.
* Note that pre-fetching does not work in development, so you need to do
* `npm run build` and `npm run start` to see the effects.
* */
export default async function ModalAppParallelLayout({modal}: { modal: ReactNode }) {
  console.log("rendering Layout")

  return (
    <>
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <ModalTechNav selected={`server_component_parallel`}/>
        <div className="mt-16 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="demo-h1">Next.js Server Component Parallel RoutesによるModal</h1>
          </div>
        </div>
        <UserList />
      </div>
      {modal}
    </>
  )
}
