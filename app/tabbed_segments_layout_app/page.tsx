import {redirect} from "next/navigation";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function TabbedSegmentsIndexPage() {
  redirect("/tabbed_segments_layout_app/users")
}
