import Link from "next/link";
import {ReactNode} from "react";

export default function PrimaryButtonWithLink({href, children, ...others}: {
  href: string,
  children: ReactNode,
  [key: string]: any
}) {
  return (
    <Link href={`${href}`} {...others}
      className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
      hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-orange-600">
      {children}
    </Link>
  )
}
