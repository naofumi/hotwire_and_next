import Modal from "@/app/modal_app_suspense/components/Modal";
import {cookies} from "next/headers";
import React from "react";
import {sleep} from "@/helpers/sleep";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getGreeting() {
  "use server"
  /* We mimic database access by storing data in cookies */
  await sleep(2000)
  const greeting = cookies().get("greeting")?.value as string | undefined;
  return greeting
}

export async function submitHandler(formData: FormData) {
  "use server"
  /* We mimic database access by storing data in cookies */
  const greeting = formData.get("greeting") as string | null;
  if (greeting) {
    cookies().set("greeting", greeting)
  }
  revalidatePath("/")
  redirect("/modal_app_suspense")
}

export default async function ModalAppSuspenseShowModal() {
  const currentGreeting = await getGreeting();
  return(
    <Modal>
      <form action={submitHandler}>
        <label htmlFor="greeting-input" className="text-sm font-bold">Enter new greeting:</label>
        <input id="greeting-input"
               name="greeting"
               defaultValue={currentGreeting}
               className="mt-2 border rounded p-1 w-full"/>
        <button type="submit"
                className="mt-8 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
          Submit greeting
        </button>
      </form>
    </Modal>
  )
}
