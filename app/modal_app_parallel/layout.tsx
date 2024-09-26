import ModalTechNav from "@/components/modal/TechNav";
import Link from "next/link";
import React, {ReactNode} from "react";
import {User} from "@/repositories/user";
import UserList from "@/app/modal_app_parallel/components/UserList"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ModalAppParallelLayout({modal}: { modal: ReactNode }) {
  console.log("rendering Parallel Routes")

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
