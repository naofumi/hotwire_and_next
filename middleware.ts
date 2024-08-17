import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {defaultDelay, sleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const delayCookie = request.cookies.get("delay")
  const cookieDelay = delayCookie && parseInt(delayCookie.value)

  if (!url.pathname.startsWith("/_next")) {
    if (externalRequest(request)) {
      await sleep(delayToApply(url, cookieDelay))
    }
  }

  return NextResponse.next()
}

/*
* These are the settings for middleware-induced artificial delay.
*
* The delays listed below apply to all requests that go through Next.js
* middleware and simulate server response delays, regardless of what
* causes that delay -- we do not control database latency separately, for example.
*
* We only want to introduce delays for our demos -- not our informational content.
* For that, we set a delay of 0.
*
* SSG generated pages (ex. "/users_ssg") will usually be put on a CDN and
* will also be prefetched if accessed via Next.js Link tags.
* This includes pages like "/users" (useEffect) which draw an SSG page
* which has a useEffect that is triggered on page loads and fetches content.
*
* These cases will have a delay of 0.
*
* SSR generated pages, including App router pages
*
*
* App router pages, behave differently depending on whether they are statically rendered
* or dynamically rendered.
* If they are statically rendered, then they will be served from static HTML, and we
* can consider them to be essentially SSG.
* If they are dynamically rendered, meaning that they use cookies, etc., or
* have `export const dynamic = 'force-dynamic'`, then these always require a server
* and act like SSR.
*
* In the current site, we wish to simulate a site that requires authentication,
* has dynamic content, and has `dynamic = 'force-dynamic'` for all pages.
*
* To simulate this, App router pages will have a delay of `demoDelay`.
* Note that if `loading.js` is provided, that file will be prefetched, immediately providing a
* loading screen.
*
* Requests to the API are all considered to be dynamic and will have a delay
* of `demoDelay`. However, if the request is internal (initiated from a server rendered
* component), then we don't sleep. The assumption is that internal network
* requests are fast.
*
* */
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
  } else if (pathName.startsWith("/modal_app")) {
    return demoDelay // SSR
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
