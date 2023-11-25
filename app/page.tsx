import Header from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area"
import {Sidebar} from "lucide-react";
import SidebarLink from "@/components/SidebarLink";


export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex justify-start">
        <ScrollArea className="h-[1000px] w-[320px] border-0 pt-0 pb-4 px-6">
          <SidebarLink name="Główna"/>
          <SidebarLink name="Shorts" />
          <SidebarLink name="Subskrypcje"/>
          <SidebarLink name="YouTube Music"/>
        </ScrollArea>
        <div className="flex items-center flex-wrap">
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
          <div className="min-w-[300px] p-10 min-h-[200px]
          bg-gray-300
          flex items-center justify-center m-4
          ">Film</div>
        </div>
      </main>
    </div>
  )
}
