import Link from "next/link";

export default function UsersIndex() {
    return (
        <>
            <div className="bg-white flex justify-end p-1">
                <a href="/hotwire/index.html" className="text-lg p-1 rounded text-red-600 mr-2">Hotwire</a>
                <Link href="/" className="text-lg p-1 rounded bg-blue-600 text-white">Next.js</Link>
            </div>

            <div className="my-10 px-4 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">A list of all the users in your account including
                            their
                            name, title,
                            email and role.</p>
                    </div>
                </div>
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr className="divide-x divide-gray-200">
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Name
                                    </th>
                                    <th scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Title
                                    </th>
                                    <th scope="col"
                                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">Email
                                    </th>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                                        Role
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">Lindsay
                                        Walton
                                    </td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">Front-end Developer</td>
                                    <td className="whitespace-nowrap p-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">Member</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="my-10 flex items-center justify-center gap-x-6">
                                <a href="/"
                                   className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ブラウザネイティブ
                                    画面遷移</a>
                                <Link href="/"
                                      className="rounded-md bg-fuchsia-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next.jsによる
                                    画面遷移</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
