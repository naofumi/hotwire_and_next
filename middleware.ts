import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {sleep} from "@/helpers/sleep";


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  await sleep(500)

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/:path*'],
}
