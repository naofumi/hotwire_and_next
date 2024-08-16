import ModalTechNav from "@/components/modal/TechNav";
import {getGreeting} from "@/app/modal_app_client/helpers/greeting";
import ModalSwitcher from "@/app/modal_app_client/ModalSwitcher";

export const dynamic = 'force-dynamic'
// export const revalidate = 0

/*
* We are creating a modal using Client Components in the App Router, and
* we want to see if it makes things easier.
*
* 1. The Modal element will tend to be high-up in the DOM. Therefore,
*     the Client Component will end up being big. In the current case,
*     I put the Modal in close to the button, but this will not always
*     be possible.
* 2. Putting "use client" in the Page component seems to have caching issues.
*    The state is not reset when we revisit the page with `router.push()`, etc.
* 3. Note that the App Router does not reset the state of Client Components.
*    For example, in the `submitHandler()`, in addition to doing a
*    `router.refresh()`, we have to also do a `closeModal()`. The
*    `router.refresh()` redraws the whole page component. However,
*    it seems like the `ModalSwitcher` component is re-used and has the
*    same state –– hence the `isModalOpen` state has to be reset.
*    Essentially, we are doing a `refresh()` of the Server Component side,
*    but not the Client Components. This is understandable, but somewhat
*    confusing.
* 4. In terms of complexity reduction:
*    a. We have to think about how to separate Server and Client components.
*       If the button and the modal need to be far apart, this can be a
*       headache.
*    b. The ModalSwitcher component exists only because we need a
*       Server-Client boundary. If that wasn't the case, the code could
*       live in the main page.
*    c. `useServerActions()` is still Canary and cannot be used with
*       confidence. Handling form submissions and choosing whether
*       to redirect or display errors based on the response, is something
*       that we still need to manage on the Client side.
*
* */

export default async function ModalAppClientPage() {
  const greeting = await getGreeting();

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <ModalTechNav selected={`client_component`}/>
      <div className="mt-24">
        <div className="mb-2 text-center">
          <div className="text-base font-bold">current greeting:</div>
          <h3 className="text-3xl font-bold">
            {greeting}
          </h3>
        </div>

        <ModalSwitcher/>
      </div>
    </div>
  )
}
