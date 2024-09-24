export default function CartTechNav({selected}: { selected: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
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
    </div>
  )
}
