import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,

} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Button } from "../ui/button"
import MobileMenu from "../mobilemenu/MobileMenu"
import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between xl:px-36 md:px-16  px-4 shadow-lg">
            <Link href={"/"} className="flex items-center">
                <Image src={"/logo.png"} height={100} width={100} alt="logo" />
            </Link>
            <NavigationMenu className={"md:flex hidden"}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={"cursor-pointer"}>
                            <Link href={"/"}>ANASAYFA</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={"cursor-pointer"}>
                            <Link href={"/hakkimizda"}>HAKKIMIZDA</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={"cursor-pointer"}>
                            <Link href={"/sss"}>SIKÇA SORULAN SORULAR</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={"cursor-pointer"}>
                            <Link href={"/iletisim"}>İLETİŞİM</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            
            <Button className={"md:block hidden hover:bg-black duration-300 cursor-pointer bg-purple-700 text-white hover:scale-110"}>
                <a href="/iletisim">
                Randevu Oluştur
                </a>
            </Button>
            <MobileMenu />
        </div>
    )
}

export default Navbar