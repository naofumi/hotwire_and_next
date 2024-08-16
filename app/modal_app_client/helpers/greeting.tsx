"use server"

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {sleep} from "@/helpers/sleep";

export async function getGreeting() {
  /* We mimic database access by storing data in cookies */
  const greeting = cookies().get("greeting")?.value as string | undefined;
  console.log("getGreeting")
  return greeting
}

/*
* The current Server Action recommendation is to do
* **redirects** inside the Server Action. However, the problem
* has been that in case of a server-side validation error,
* there is no way for the Server Action to send error state
* back to the Client. The fix for this is useServerAction, but
* this is still a React 19RC canary feature. It is not something
* to rely upon. Hence, we won't do the redirect here. We'll
* let the Client do it.
* */
export async function updateGreeting(formData: FormData) {
  /* We mimic database access by storing data in cookies */
  const greeting = formData.get("greeting") as string | null;
  console.log("updatingGreeting")
  console.log(formData);
  if (greeting) {
    cookies().set("greeting", greeting)
    return {status: "ok"}
  } else {
    return {status: "error"}
  }
}

