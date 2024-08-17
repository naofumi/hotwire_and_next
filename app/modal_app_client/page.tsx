import React from "react";
import {User} from "@/repositories/user";
import ModalAppClientPageComponent from "@/app/modal_app_client/components/ModalAppPageComponent";

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
* 1. Although the Next.js documentation recommends pushing Client Components down
*    in the DOM hierarchy, this is not feasible with modals.
*    Modals will typically be placed close to the root element to prevent issues
*    with `position: fixed`, and the "use client" boundary will have to include this.
*    In the current code, the Page component is a server component so that we can fetch
*    data on the server and can send HTML to the browser on the first load (like SSR).
*    However, we immediately hand down the data to a Client Component for rendering.
* 2. Is the App Router Client Component code simpler?
*    We made the Page Component a Server Component to fetch data on the server.
*    Then we immediately handed down the data to a Client Component.
*    With the Pages Router, we would have just used `getServerSideProps`, which
*    is more straightforward.
*    Otherwise, the code is almost identical. The App Router code does not look any
*    simpler than the Pages Router.
*
* */

export default async function ModalAppClientPage() {
  const users = await getUsers()

  return (
    <ModalAppClientPageComponent users={users} />
  )
}
