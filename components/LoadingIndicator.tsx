import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import netscape from "@/public/images/netscape.gif"
import Image from "next/image"
import {sleep} from "@/helpers/sleep";

export default function LoadingIndicator({hideLoadingIndicator, children}: { hideLoadingIndicator?: boolean, children: ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let abort = false
    const handleRouteChangeStart = async (url: any, {shallow}: any) => {
      await sleep(500, {no_log: true})
      !abort && setIsLoading(true);
    }
    const handleRouteChangeComplete = (url: any, {shallow}: any) => {
      setIsLoading(false);
      abort = true
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])
  return (
    <>
      {isLoading && !hideLoadingIndicator &&
        <div className="fixed top-0 right-0">
          <Image src={netscape} alt="loader" className="m-auto w-16 h-16"></Image>
        </div>
      }
      {children}
    </>
  )
}
