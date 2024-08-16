"use server"

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {sleep} from "@/helpers/sleep";

export async function getGreeting() {
  await sleep(2000)
  /* We mimic database access by storing data in cookies */
  const greeting = cookies().get("greeting")?.value as string | undefined;
  return greeting
}

export async function updateGreeting(formData: FormData) {
  /* We mimic database access by storing data in cookies */
  const greeting = formData.get("greeting") as string | null;
  console.log(greeting);
  console.log(formData);
  if (greeting) {
    cookies().set("greeting", greeting)
  }
  return {success: "OK"}
}

