import React, {useEffect} from "react";
import {getCookie, setCookie} from "cookies-next";
import {defaultDelay} from "@/helpers/sleep";
import {useRouter} from "next/router";

export default function DelaySetter() {
  const router = useRouter()
  const [showDelay, setShowDelay] = React.useState<boolean>(false);
  const [currentDelay, setCurrentDelay] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    const currentDelay = getCookie("delay") || defaultDelay.toString()
    setCurrentDelay(currentDelay)
  }, [])

  function setDelayCookieAndReload(event: React.FormEvent<HTMLSelectElement>) {
    setCookie('delay', event.currentTarget.value)
    router.reload()
  }

  return (
    <>
      {showDelay
        ? <div className="">
          <label htmlFor="delay"
                 className="text-center block text-sm font-medium leading-6 text-gray-900">Delay</label>
          <select id="delay"
                  onInput={(event) => setDelayCookieAndReload(event)}
                  className="block mx-auto w-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  value={currentDelay}
          >
            <option value="300">300ms</option>
            <option value="1000">1000ms</option>
            <option value="2000">2000ms</option>
          </select>
          <div className="text-center mt-2">
            <button
              onClick={() => setShowDelay(false)}
              className="btn-outline-primary text-xs !p-1"
            >
              Close
            </button>
          </div>
        </div>
        : <div>
          <button
            onClick={() => setShowDelay(true)}
            className="mx-auto block btn-outline-primary text-xs !p-1"
          >
            Current delay {currentDelay}ms
          </button>
        </div>
      }
    </>
  )
}
