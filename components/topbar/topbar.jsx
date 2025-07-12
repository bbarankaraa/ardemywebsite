import { InstagramIcon, MessageCircle, PhoneCallIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


import Link from "next/link"


const Topbar= () => {
  return (
    <div className="h-16 bg-black md:flex hidden items-center justify-between text-white px-16">
        <div className="flex items-center gap-5">
            <Link className="flex items-center gap-2 hover:text-red-400 duration-300" target="_blank" href={"mailto:sevinclere@gmail.com"}>
                <MessageCircle />
                <span>
                sevinclere@gmail.com
                </span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-red-400 duration-300" href={"tel:+905511320340"}>
                <PhoneCallIcon />
                <span>
                551 132 03 40
                </span>
            </Link>
        </div>
        <div className="flex items-center gap-5">
            <Link target="_blank" href={"https://www.instagram.com/edizsevinclerbusiness/"} className="hover:text-red-400 duration-300">
                <InstagramIcon />
                
            </Link>
            <Link target="_blank" href={"https://wa.me/905511320340"} className="hover:text-red-400 duration-300">
                <FaWhatsapp size={28} />
            </Link>
            <Link href={""} className="hover:text-red-400 duration-300">
                <FaTelegramPlane size={28} />
            </Link>
        </div>
    </div>
  )
}

export default Topbar