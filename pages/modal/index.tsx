import Layout from "../../components/Layout";
import React, {useState} from "react";
import Modal from "../../components/Modal";
import ModalTechNav from "@/components/modal/TechNav";
import {GetServerSidePropsContext} from "next";
import cookies from "next-cookies";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const {greeting} = cookies(context)
  return {props: {greeting: greeting || null}}
}

export default function ModalIndex(props: {greeting: string | null}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const greeting = props.greeting

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Layout>
      <div className="my-10 px-4 sm:px-6 lg:px-8">
        <ModalTechNav selected={`use_effect`}/>
        <div className="mt-24">
          <div className="mb-2 text-center">
            <div className="text-base font-bold">current greeting:</div>
            <h3 className="text-3xl font-bold">{greeting}</h3>
            <input type="hidden" value={greeting || ""}/>
          </div>

          <div className="flex justify-center mt-16">
            <div>
              <button
                type="button"
                className="border bg-orange-600 rounded text-white p-2"
                onClick={() => setIsModalOpen(true)}
              >
                Show Modal (React useEffect)
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && <Modal currentGreeting={greeting || ""} closeModal={closeModal}/>}
      </div>
    </Layout>
  )
}
