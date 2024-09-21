import Link from "next/link";

export default function TabbedSegmentTechNav({selected}: { selected: string }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <a href="/api/hotwire/tabbed_segments_no_js"
         className={selected === "no_js"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Javascriptなし
      </a>
      <a href="/api/hotwire/tabbed_segments_turbodrive"
         className={selected === "turbo_drive"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Drive
      </a>
      <a href="/api/hotwire/tabbed_segments_turboframes"
         className={selected === "turbo_frames"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Frames
      </a>
      <a href="/tabbed_segments"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
      <a href="/tabbed_segments_ssr"
         className={selected === "ssr"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Pages router SSR
      </a>
      <a href="/tabbed_segments_app"
         className={selected === "parallel"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Parallel routes
      </a>
    </div>
  )
}
