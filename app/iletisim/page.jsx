import { Separator } from "@/components/ui/separator"
import ContactForm from "./_components/ContactForm"
import { MapIcon, PhoneCallIcon } from "lucide-react"
import { FaEnvelope } from "react-icons/fa"

const IletisimPage = () => {

  return (
     <div className="xl:px-36 md:px-16 py-8 px-4">
      <h2 className="text-3xl font-semibold mb-5 text-center">İletişim</h2>
      
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 md:gap-10">
        <ContactForm />
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full rounded-2xl shadow-3xl px-10 py-10 shadow-2xl">
        <h2 className="text-3xl text-center mb-5">İletişim Bilgileri</h2>
        <p className="text-gray-500 text-center mb-10">Aşağıdaki bilgilerden bize istediğiniz zaman ulaşabilirsiniz...</p>
        <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <MapIcon size={16} />
          <span className="ms-3">Hacıahmet, Kurtuluş Deresi Cd. No:29, 34440 İzmit/Kocaeli</span>
        </div>
        <Separator />
        <div className="flex items-center mb-4">
          <PhoneCallIcon size={16} />
          <span className="ms-3">+90 551 132 03 40</span>
        </div>
        <Separator />
        <div className="flex items-center mb-4">
          <FaEnvelope size={16} />
          <span className="ms-3">sevinclere@gmail.com</span>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default IletisimPage