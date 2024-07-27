import {ReactNode} from "react";
import StyledLink from "@/pages/components/StyledLink";

export function h2({children}: {children?: ReactNode}) {
  return <h2 className="mt-16 mb-8 text-2xl font-bold tracking-tight text-gray-900">{children}</h2>
}

export function h3({children}: {children?: ReactNode}) {
  return <h3 className="mt-8 mb-4 text-xl font-bold tracking-tight text-gray-900">{children}</h3>
}

export function p({children}: {children?: ReactNode}) {
  return <p className="text-gray-700 my-4 text-base">{children}</p>;
}

export function a({children, href}: {children?: ReactNode, href?: string}) {
  return <StyledLink href={href || ""}>{children}</StyledLink>
}

export function code({children}: {children?: ReactNode}) {
  return <code className="px-1 bg-gray-200 break-all">{children}</code>
}

export function ul({children}: {children?: ReactNode}) {
  return <ul className="list-image-[url(/images/check-circle.svg)] ml-6 my-4 space-y-4">{children}</ul>;
}
