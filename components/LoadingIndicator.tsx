import {useRouter} from "next/router";
import {ReactNode, useEffect, useState} from "react";
import netscape from "@/public/images/netscape.gif"
import Image from "next/image"

export default function LoadingIndicator({children}: { children: ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (url: any, {shallow}: any) => {
      setIsLoading(true);
    }
    const handleRouteChangeComplete = (url: any, {shallow}: any) => {
      setIsLoading(false);
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router])
  return (
    <>
      {isLoading &&
        <div className="fixed top-0 right-0">
          <Image src={netscape} alt="loader" className="m-auto w-16 h-16"></Image>
        </div>
      }
      {children}
    </>
  )
}
