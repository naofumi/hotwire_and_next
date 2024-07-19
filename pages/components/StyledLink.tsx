import {ReactNode} from "react";
import Link from "next/link";

export default function StyledLink({href, children}: {href: string, children: ReactNode}) {
  return (
    <Link href={href} className="text-orange-600 hover:text-orange-400 underline">{children}</Link>
)
}
