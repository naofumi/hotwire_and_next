import React, {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function ModalWOAnimation({closeModal}: {closeModal: () => void}) {
  const [data, setData] = useState<String[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    setInterval(() => setData(["foo", "bar"]), 2000)
  }, [])

  async function handleSubmit() {
    // I want to send a POST to the server and mutate a value.
    closeModal()
    // I need a redirect to ensure that the new value is
    // displayed.
    await router.push("/modal_wo_animation")
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            {data
              ?
              <>
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Payment
                      successful</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur
                        amet labore.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    onClick={() => {handleSubmit()}}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </>
              :
              <div>Loading...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
