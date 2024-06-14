import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"

import {  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription} from "@/components/ui/sheet"

export function Footer() {
  return (
    <Tabs defaultValue="typescript" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="nextjs"><Sheet><SheetTitle></SheetTitle>Nextjs<SheetTrigger><SheetOverlay>Hifffff</SheetOverlay></SheetTrigger></Sheet></TabsTrigger>
     
        
             
        <TabsTrigger value="reactnative">React_Native</TabsTrigger>
        <TabsTrigger value="typescript">TypeScript</TabsTrigger>
        <TabsTrigger value="otherapps">Other_Apps</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
