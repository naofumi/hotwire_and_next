export default function ModalTechNav({selected}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <a href="/ModalIndex"
         className={selected === "use_effect"
                    ? " btn-primary"
                    : " btn-outline-primary"}
      >
        React useEffect
      </a>
      <a href="/modal_app"
         className={selected === "server_component"
                    ? " btn-primary"
                    : " btn-outline-primary"}
      >
        React Server Component
      </a>
      <a href="/api/hotwire/modal_no_js"
         className={selected === "hotwire_no_js"
                    ? " btn-primary"
                    : " btn-outline-primary"}
      >
        Hotwire Custom JavaScript未使用
      </a>
      <a href="/api/hotwire/modal_w_js"
         className={selected === "hotwire_w_js"
                    ? " btn-primary"
                    : " btn-outline-primary"}
      >
        Hotwire Custom JavaScript使用
      </a>
    </div>
  )
}
