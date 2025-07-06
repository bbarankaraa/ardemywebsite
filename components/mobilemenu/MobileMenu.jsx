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
                        <SheetDescription>
                           <div className="flex flex-col gap-5">
                                <Link href={"/"}>Anasayfa</Link>
                                <Link href={"/"}>Belgeler</Link>
                                <Link href={"/"}>Ders içi kayıtlar</Link>
                                <Link href={"/"}>Öğrenciler</Link>
                                <Link href={"/"}>Hakkımda</Link>
                                <Link href={"/"}>Sıkça Sorulan Sorular</Link>
                                <Link href={"/"}>İletişim</Link>
                           </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileMenu