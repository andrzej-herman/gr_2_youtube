import {Home, LucideIcon} from "lucide-react"

interface SidebarLinkProps {
  name: string;
}

export default function SidebarLink({name}: SidebarLinkProps ) {
  return (
    <div className="flex
    items-center
    justify-start
    gap-4 rounded-md bg-neutral-100 p-3 mb-4">
      <Home className="h-5 w-5"/>
      <h6 className="text-sm">{name}</h6>
    </div>
  )
}