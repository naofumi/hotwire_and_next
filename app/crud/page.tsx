import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function create(formData: FormData) {
  "use server"
  const rawFormData = {
    greeting: formData.get("greeting"),
  } as { greeting: string }

  const cookieStore = cookies()
  cookieStore.set("greeting", rawFormData.greeting)

  revalidatePath("/")
  redirect("/crud")
}

async function getGreeting() {
  const cookieStore = cookies()
  const greeting = cookieStore.get("greeting")?.value as string

  return greeting
}

export default async function Crud() {
  const greeting = await getGreeting()
  return (
    <>
      <div>
        <h2>Greeting</h2>
        {greeting}
      </div>

      <form key={(Math.random() * 1000).toString()} action={create}>
        <input type="text" name="greeting"/>
        <button type="submit" value={``}>Submit</button>
      </form>
    </>
  )
}
