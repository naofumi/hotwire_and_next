import React, {FormEvent, useEffect} from "react";
import Modal from "@/app/modal_app_client/components/Modal";
import {getGreeting, updateGreeting} from "@/app/modal_app_client/helpers/greeting";
import Image from "next/image";
import rocketImage from "@/public/images/rocket.gif";
import {useRouter} from "next/navigation";


export default function EditModal({closeModal}: {closeModal: () => void}) {
  const router = useRouter();
  const [currentGreeting, setCurrentGreeting] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    getGreeting().then((greeting) => setCurrentGreeting(greeting));
  }, [])

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    await updateGreeting(formData);
    router.refresh()
    closeModal();
  }

  return (
    <Modal>
      {currentGreeting
        ? <form onSubmit={submitHandler}>
          <label htmlFor="greeting-input" className="text-sm font-bold">Enter new greeting:</label>
          <input id="greeting-input"
                 name="greeting"
                 defaultValue={currentGreeting}
                 className="mt-2 border rounded p-1 w-full"/>
          <button type="submit"
                  className="mt-8 inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
            Submit greeting
          </button>
        </form>
        : <div className="flex justify-evenly w-full w-96 mt-12 mb-12">
          <Image src={rocketImage} alt="loader" className="w-16 h-16"/>
        </div>
      }
    </Modal>
  )
}
