export default function ModalTechNav({selected}: { selected: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <a href="/live_search"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
      <a href="/api/hotwire/live_search"
         className={selected === "turbo_frames"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Hotwire Turbo Frames
      </a>
      <a href="/api/hotwire/live_search_morph"
         className={selected === "morph"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Hotwire Turbo Drive Morph
      </a>
    </div>
  )
}
