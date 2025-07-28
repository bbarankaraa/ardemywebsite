import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"

const MobileMenu = () => {
    return (
        <div className="md:hidden block">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription className={"flex flex-col gap-5"}>
                                <Link href={"/"}>Anasayfa</Link>
                                <Link href={"/hakkimizda"}>Hakkımızda</Link>
                                <Link href={"/sss"}>Sıkça Sorulan Sorular</Link>
                                <Link href={"/iletisim"}>İletişim</Link>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileMenu