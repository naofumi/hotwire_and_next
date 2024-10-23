export default function TransitionTechNav({selected}: {selected: string}) {
  return (
    <div className="mt-8 flex flex-wrap gap-2 justify-center">
      <a href="/api/hotwire/users"
         className={selected === "mpa"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        MPA(ブラウザネイティブ)
      </a>
      <a href="/api/hotwire/users"
         className={selected === "turbo_drive"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Turbo Drive
      </a>
      <a href="/users_ssg"
         className={selected === "ssg"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Pages Router SSG
      </a>
      <a href="/users"
         className={selected === "use_effect"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js useEffect
      </a>
      <a href="/users_ssr"
         className={selected === "ssr"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js Pages Router SSR
      </a>
      <a href="/users_app"
         className={selected === "server_component"
           ? " btn-primary"
           : " btn-outline-primary"}
      >
        Next.js App Router Server Component
      </a>
    </div>
  )
}
