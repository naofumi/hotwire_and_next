export default function ModalTechNav({selected}: {selected: string}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <a href="/modal"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        React useEffect
      </a>
      <a href="/modal_app_client"
         className={selected === "client_component"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        React Client Component
      </a>
      <a href="/modal_app"
         className={selected === "server_component"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        React Server Component Simple
      </a>
      <a href="/modal_app_parallel"
         className={selected === "server_component_parallel"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        React Server Component w/ Parallel Routes
      </a>
      <a href="/api/hotwire/modal_no_js"
         className={selected === "hotwire_no_js"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Hotwire Custom JavaScriptなし
      </a>
      <a href="/api/hotwire/modal_w_js"
         className={selected === "hotwire_w_js"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Hotwire Custom JavaScriptあり
      </a>
    </div>
  )
}
