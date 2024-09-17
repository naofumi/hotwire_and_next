import React from "react";
import Link from "next/link";

export type ChapterPage = {
  level: number
  link: string | null | undefined
  name: string | null | undefined
}

function headersFromHtml(htmlString: string): ChapterPage[] {
  const headerRegexp = /<h(2|3)([^>]*)>(.*?)<\/h\1>/g
  const linkMatchRegexp = /id=["']([\w-]+)["']/
  const titleExtractRegexp = /^(?:<span>)?(.*?)(?:<\/span>)?(?:<a[^>]*>.*?<\/a>)?$/

  let matchResult
  let headers = []
  while (matchResult = headerRegexp.exec(htmlString)) {
    const linkMatch = matchResult[2].match(linkMatchRegexp)
    const link = linkMatch?.[1]
    const nameMatch = matchResult[3]?.match(titleExtractRegexp)
    const name = nameMatch?.[1]
    headers.push({level: parseInt(matchResult[1]), link: link ? `#${link}` : null, name: name})
  }

  return headers
}

function cssClassForLevel(level: number) {
  return [
    "",
    "",
    "before:content-['•'] before:mr-2 before:font-black before:text-orange-600 -indent-3.5 pl-4 text-sm font-bold mb-2",
    "ml-10 border-l border-dashed pl-4 border-orange-600 text-sm text-gray-500",
    "ml-12 border-l pl-4 text-xs text-gray-500",
  ][level]
}

function headersToOrderedList(headers: ChapterPage[]) {

  return (<>
    {headers.map((header, i) => (
      header.link
        ? <div key={i} className={cssClassForLevel(header.level)}>
          <Link href={header.link} className="hover:text-orange-600">{header.name}</Link>
        </div>
        : <div key={i} className={cssClassForLevel(header.level)}>{header.name}</div>
    ))}
  </>)
}

export default function ChapterList({htmlString}: {htmlString: string}) {
  const headers = headersFromHtml(htmlString)
  return <div className="my-8 border border-gray-300 rounded p-4">
    <Link href="" className="block font-bold text-lg mb-2 hover:text-orange-600">目次</Link>
    {headersToOrderedList(headers)}
  </div>;
}


