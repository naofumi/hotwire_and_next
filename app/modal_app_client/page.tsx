import React from "react";
import {User} from "@/repositories/user";
import ModalAppClientTable from "@/app/modal_app_client/components/ModalAppClientTable";
import ModalTechNav from "@/components/modal/TechNav";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getUsers(): Promise<User[]> {
  "use server"
  console.log("Fetch start for Users")
  const res = await fetch(process.env.URL + "/api/users")
  const users = await res.json()
  return users
}

/*
* The purpose of this demo is to compare the code for creating modals
* using Next.js Pages Router, and App Router with Client Components.
*
* 1. Is the App Router Client Component code simpler?
*    We made the Page Component a Server Component to fetch data on the server.
*    Then we handed down the data to a Client Component.
*    With the Pages Router, we would have just used `getServerSideProps`, which
*    is arguably more straightforward.
*    Otherwise, the code is almost identical. The App Router code does not look any
*    simpler than the Pages Router.
*
* */

export default async function ModalAppClientPage() {
  const users = await getUsers()

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <ModalTechNav selected={`client_component`}/>
      <div className="mt-16 sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="demo-h1">React Client ComponentによるModal</h1>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <ModalAppClientTable users={users}/>
          </div>
        </div>
      </div>
    </div>
  )
}
