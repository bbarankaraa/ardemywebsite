import { InstagramIcon, MessageCircle, PhoneCallIcon } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


import Link from "next/link"


const Topbar= () => {
  return (
    <div className="h-16 bg-black md:flex hidden items-center justify-between text-white px-16">
        <div className="flex items-center gap-5">
            <Link className="flex items-center gap-2 hover:text-red-400 duration-300" href={"/"}>
                <MessageCircle />
                <span>
                iletisim@ediz.com
                </span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-red-400 duration-300" href={"/"}>
                <PhoneCallIcon />
                <span>
                555 555 55 55
                </span>
            </Link>
        </div>
        <div className="flex items-center gap-5">
            <Link href={""} className="hover:text-red-400 duration-300">
                <InstagramIcon />
            </Link>
            <Link href={""} className="hover:text-red-400 duration-300">
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