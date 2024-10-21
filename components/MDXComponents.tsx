import {createElement, ReactNode} from "react";
import StyledLink from "@/components/StyledLink";
import {renderToString} from "react-dom/server";
import Link from "next/link";

export function h2({children}: {children?: ReactNode}) {
  return linkableHeader("h2", "mt-16 pt-4 py-2 text-2xl font-bold tracking-tight text-gray-900", "ml-2 text-gray-400 hover:text-orange-600", children)
}

export function h3({children}: {children?: ReactNode}) {
  return linkableHeader("h3", "mt-4 py-2 text-xl font-bold tracking-tight text-gray-900", "ml-2 text-gray-400 hover:text-orange-600", children)
}

export function h4({children}: {children?: ReactNode}) {
  return <h4 className="mt-4 mb-0 text-lg font-bold tracking-tight text-gray-900">{children}</h4>
}

export function p({children}: {children?: ReactNode}) {
  return <p className="text-gray-700 my-4 text-base/7">{children}</p>;
}

export function a({children, href}: {children?: ReactNode, href?: string}) {
  return <StyledLink href={href || ""}>{children}</StyledLink>
}

export function ul({children}: {children?: ReactNode}) {
  return <ul className="ml-4 my-4 space-y-2">{children}</ul>;
}

export function ol({children}: {children?: ReactNode}) {
  return <ol className="ml-12 my-2">{children}</ol>;
}

function linkableHeader(name:string, linkCss: string, hashSymbolCss: string, children: ReactNode) {
  const htmlString = renderToString(children);
  const matches = htmlString.match(/===([\w-_]+)===/)
  if (matches) {
    const link = matches[1]
    const modifiedChildrenString = htmlString.replace(`===${link}===`, "");
    return createElement(name, {className: linkCss, id: link}, <>
      <span dangerouslySetInnerHTML={{__html: modifiedChildrenString}} />
      <Link href={`#${link}`} className={hashSymbolCss}>#</Link>
    </>);
  } else {
    return createElement(name, {className: linkCss}, <span>{children}</span>)
  }
}
