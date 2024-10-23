export default function AddressTechNav({selected}: { selected: string }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2 justify-center">
      <a href="/api/hotwire/address_selector"
         className={selected === "turbo_frames"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Frames
      </a>
      <a href="/api/hotwire/address_selector_streams"
         className={selected === "turbo_streams"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Streams
      </a>
      <a href="/address_selector"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
    </div>
  )
}
