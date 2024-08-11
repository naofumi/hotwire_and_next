import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {sleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url)

  if (externalRequest(request)) {
    await sleep(delayToApply(url))
  }

  return NextResponse.next()
}

function delayToApply(url: URL) {
  const defaultDemoDelay = 300
  const pathName = url.pathname

  if (pathName === "/") {
    return 0
  } else if (pathName.startsWith("/users")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/products")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/address_selector")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/details_panel")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/live_search")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/modal")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/popup")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/tabbed")) {
    return defaultDemoDelay
  } else if (pathName.startsWith("/api")) {
    return defaultDemoDelay
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
