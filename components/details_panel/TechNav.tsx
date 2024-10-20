export default function DetailsTechNav({selected}: { selected: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <a href="/api/hotwire/details_panel_mpa"
         className={selected === "mpa"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        MPA
      </a>
      <a href="/api/hotwire/details_panel"
         className={selected === "turbo_frames"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Hotwire Turbo Frames
      </a>
      <a href="/details_panel"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
    </div>
  )
}
