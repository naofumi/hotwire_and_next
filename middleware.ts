import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {defaultDelay, sleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const delayCookie = request.cookies.get("delay")
  const cookieDelay = delayCookie && parseInt(delayCookie.value)

  if (externalRequest(request)) {
    await sleep(delayToApply(url, cookieDelay))
  }

  return NextResponse.next()
}

function delayToApply(url: URL, cookieDelay: number | undefined) {
  const demoDelay = cookieDelay || defaultDelay
  const pathName = url.pathname

  if (pathName === "/") {
    return 0
  } else if (pathName === "/users_ssg") {
    return 0 // SSG
  } else if (pathName === "/products_ssg") {
    return 0 // SSG
  } else if (pathName === "/users_ssr") {
    return demoDelay // SSR
  } else if (pathName === "/products_ssr") {
    return demoDelay // SSR
  } else if (pathName === "/users_app") {
    return demoDelay // dynamic
  } else if (pathName === "/products_app") {
    return demoDelay // dynamic
  } else if (pathName === "/users") {
    return 0 // Static
  } else if (pathName === "/products") {
    return 0 // Static
  } else if (pathName === "/address_selector") {
    return 0 // Static
  } else if (pathName.startsWith("/details_panel")) {
    return demoDelay // SSR
  } else if (pathName.startsWith("/live_search")) {
    return 0 // Static
  } else if (pathName.startsWith("/modal")) {
    return 0 // Static
  } else if (pathName.startsWith("/popup")) {
    return 0 // Static
  } else if (pathName.startsWith("/tabbed_segments_app")) {
    return demoDelay // dynamic
  } else if (pathName.startsWith("/tabbed_segments_layout_app")) {
    return demoDelay // dynamic
  } else if (pathName.startsWith("/tabbed")) {
    return 0 // Static
  } else if (pathName.startsWith("/api")) {
    return demoDelay
  } else {
    return 0
  }
}

function externalRequest(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')
  const url = request.url
  if (userAgent === "node") {
    console.log("internal API request: no delay")
    // If the userAgent is "node" then this request originated from
    // the Next.js server and is an internal connection. In this case,
    // we expect very low latency and will not add latency to the emulation.
    return false
  } else {
    return true
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/:path*'],
}
