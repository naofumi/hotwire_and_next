import {ReactNode} from "react";
import StyledLink from "@/components/StyledLink";

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

export function ul({children}: {children?: ReactNode}) {
  return <ul className="ml-4 my-4 space-y-2">{children}</ul>;
}

export function ol({children}: {children?: ReactNode}) {
  return <ol className="ml-12 my-4 space-y-2">{children}</ol>;
}
