import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <div className="bg-white flex justify-between p-1">
        <Link href="/" className="text-lg p-1 rounded bg-indigo-600 text-white">Top</Link>
        <div className="text-lg p-1 rounded bg-blue-600 text-white">Next.js</div>
      </div>
      {children}
    </>
  )
}
