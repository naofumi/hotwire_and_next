import Layout from "@/components/Layout";
import React, {ReactNode} from "react";
import {renderToString} from "react-dom/server";
import ChapterList from "@/components/ChapterList";

export default function CommentaryLayout(
  {children, title, subtitle, section}: { children: ReactNode, title: string, subtitle: string, section: string }
) {
  // We can use this to extract the TOC
  const htmlString = renderToString(children)

  return <Layout hideTechLabel={true}>
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-orange-600">
          {section}
        </p>
        <h1 className="z-10 bg-white sticky top-0 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-8">
          {subtitle}
        </p>
        <ChapterList htmlString={htmlString}/>
        <div className="mt-10 max-w-3xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  </Layout>
}
