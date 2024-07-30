import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {responseSleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  if (shouldDelayResponse(request)) {
    await responseSleep()
  }

  return NextResponse.next()
}

function shouldDelayResponse(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')
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
