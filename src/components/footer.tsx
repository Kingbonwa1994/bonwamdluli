import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiAppsFill } from "react-icons/ri";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export function Footer() {
  return (
    <Tabs defaultValue="nextjs" className="w-full flex items-center justify-center">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="nextjs" className="absolute to-inherit" asChild>
          <Dialog><DialogTrigger><RiNextjsFill /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>These Apps I have built with Nextjs.</DialogTitle>
              <DialogDescription>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </TabsTrigger>
        <TabsTrigger value="reactnative" asChild>
          <Dialog>
            <DialogTrigger><TbBrandReactNative /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>These Apps I have built with Nextjs.</DialogTitle>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </TabsTrigger>
        <TabsTrigger value="typescript" asChild>
        <Dialog>
          <DialogTrigger><SiTypescript /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>These Apps I have built with Nextjs.</DialogTitle>
              <DialogDescription>
              Leveraging experience with Next.js and React Native , Ive honed a development approach that prioritizes a rock-solid backend foundation ️. This is driven by my extensive use of Supabase for type generation ( for those sweet types!), alongside proficiency in tools like Prisma , tRPC 🪄, Drizzle , Appwrite ✨, MongoDB , SQL Structured Query Language for interacting with relational databases like MySQL, PostgreSQL, SQL Server etc. , and PostgreSQL . This approach ensures a well-defined data schema and seamless API integration, leading to efficient and maintainable frontend development for client projects , all within a Backend-as-a-Service (BaaS) paradigm . Bonus: My backend focus has made me a type-safety champion in coding!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </TabsTrigger>
        <TabsTrigger value="otherapps" asChild>
        <Dialog>
          <DialogTrigger><RiAppsFill /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>These Apps I have built with Nextjs.</DialogTitle>
              <DialogDescription>

              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
