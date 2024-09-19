import DelaySetter from "@/components/DelaySetter";
import Layout from "@/components/Layout";
import {useRouter} from "next/router";

export default function DelaySetterPage() {
  const router = useRouter()

  function goBack() {
    router.back()
  }

  return <Layout>
    <div className="text-center">
      <h1 className="mt-16 text-3xl font-bold tracking-tight text-gray-900">Delay Setter</h1>
      <div className="mt-16">
        <DelaySetter/>
      </div>
      <div className="mt-16">
        <button
          onClick={goBack}
          className="text-sm rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
      hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      focus-visible:outline-orange-600">
          前のページに戻る
        </button>
      </div>
    </div>
  </Layout>
}
