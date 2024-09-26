export default function CartTechNav({selected}: { selected: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <a href="/api/hotwire/cart_mpa"
         className={selected === "mpa"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        MPA
      </a>
      <a href="/api/hotwire/cart_morph"
         className={selected === "morph"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Drive Morphing
      </a>
      <a href="/api/hotwire/cart_streams"
         className={selected === "streams"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Streams
      </a>
      <a href="/api/hotwire/cart_frames"
         className={selected === "frames"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Frames
      </a>
      <a href="/cart"
         className={selected === "react"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Pages Router
      </a>
      <a href="/cart_app"
         className={selected === "server_actions"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Server Actions
      </a>
    </div>
  )
}
