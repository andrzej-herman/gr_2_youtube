import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"

export default function Header() {
  return (
    <div className="flex items-center justify-between py-3 px-6">
      <Image
        src="/youtube-logo-light.png"
        alt="YouTubeLogo"
        width="110"
        height="100"
      />
      <div className="flex items-center justify-center">
        <Input className="w-[600px] border-2
      border-t-neutral-300
      border-b-neutral-300
      border-l-neutral-300
      rounded-bl-full
      rounded-tl-full
      "/>
        <div className="bg-gray-300
        transition
        hover:bg-gray-200
        cursor-pointer
        flex
        items-center
        justify-center
         border-t-neutral-300
         border-b-neutral-300
         border-r-neutral-300
         rounded-tr-full
         rounded-br-full
         p-2.5
         w-[80px]
        ">
          <Search className="h-5 w-5 text-gray-400"/>
        </div>
      </div>

      <p>Logowanie</p>
    </div>
  )
}