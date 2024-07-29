import Layout from "../../components/Layout";
import Link from "next/link";
import {useState} from "react";
import ModalWOAnimation from "../../components/ModalWOAnimation";

export default function ModalWOAnimationIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return(
    <Layout>
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div>
            <div className="font-bold text-sm mb-4 text-gray-400">遅いネットワークを再現するため<br/>２秒間のディレイを入れています
            </div>
            <button
              type="button"
              className="border bg-orange-600 rounded text-white p-2"
              onClick={() => setIsModalOpen(true)}
            >
              Show Modal (React conditional render)
            </button>
          </div>
        </div>
        {isModalOpen && <ModalWOAnimation closeModal={closeModal} />}
      </div>
      <div className="flex justify-center mt-48">
        <Link href="/api/hotwire/modal_w_js"
           className="border bg-orange-600 rounded text-white p-2">
          JavaScript使用バージョンへ
        </Link>
      </div>
    </Layout>
  )
}
