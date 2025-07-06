import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
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
                        <NavigationMenuTrigger className={"cursor-pointer"}>KURUMSAL</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 md:grid-cols-2 w-[400px]">
                                <NavigationMenuLink className={"cursor-pointer"}>
                                    <Link href={"/"}>BELGELER</Link>
                                </NavigationMenuLink>
                                <NavigationMenuLink className={"cursor-pointer"}>DERS İÇİ KAYITLAR</NavigationMenuLink>
                                <NavigationMenuLink className={"cursor-pointer"}>ÖĞRENCİLER</NavigationMenuLink>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href="/hakkimizda">HAKKIMIZDA</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href="/sss">SIKÇA SORULAN SORULAR</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink className={"cursor-pointer"}>
                            <Link href="/iletisim">İLETİŞİM</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href={"/iletisim"}>
            <Button className={"md:block hidden hover:bg-black duration-300 cursor-pointer bg-purple-700 text-white hover:scale-110"}>
                Randevu Oluştur
            </Button>
            </Link>
            <MobileMenu />
        </div>
    )
}

export default Navbar