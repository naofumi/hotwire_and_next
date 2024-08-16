import Modal from "@/app/modal_app_suspense/components/Modal";
import {cookies} from "next/headers";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ModalAppSuspenseShowModal() {
  return(<Modal />)
}
