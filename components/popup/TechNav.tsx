export default function PopupTechNav({selected}: {selected: string}) {
  return (
      <div className="flex flex-wrap gap-2 justify-center">
      <a href="/api/hotwire/popup"
         className={selected === "js"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Frames & Inline JS
      </a>
      <a href="/api/hotwire/popup_stimulus"
         className={selected === "stimulus"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Frames & Stimulus
      </a>
      <a href="/popup"
         className={selected === "useeffect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
    </div>
)
}
