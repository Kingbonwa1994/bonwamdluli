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

export function Footer() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="account">Nextjs</TabsTrigger>
        <TabsTrigger value="password">React_Native</TabsTrigger>
        <TabsTrigger value="password">TypeScript</TabsTrigger>
        <TabsTrigger value="password">Other_Apps</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
