import React from "react";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function submitHandler(formData: FormData) {
  "use server"
  /* We mimic database access by storing data in cookies */
  const greeting = formData.get("greeting") as string | null;
  if (greeting) {
    cookies().set("greeting", greeting)
  }
  revalidatePath("/")
  redirect("/modal_app")
}

export default function Modal({currentGreeting}: { currentGreeting: string | undefined }) {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div className="mt-5 sm:mt-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
