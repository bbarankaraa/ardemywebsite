import { Separator } from "@/components/ui/separator"
import ContactForm from "./_components/ContactForm"
import { MapIcon, PhoneCallIcon } from "lucide-react"
import { FaEnvelope } from "react-icons/fa"

const IletisimPage = () => {

  return (
     <div className="xl:px-36 md:px-16 py-8 px-4">
      <h2 className="text-3xl font-semibold mb-5 text-center">İletişim</h2>
      <iframe
      className="rounded-3xl shadow-2xl md:w-[1200px] w-full h-[180px]"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6725.7420746688695!2d-97.03315426552298!3d33.07445556916699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2f996511cc97%3A0x14daf4513a436263!2sMotor%20City%20Pizza!5e0!3m2!1str!2str!4v1751736144990!5m2!1str!2str"
  width="1200"
  height="180"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    <div className="flex flex-col md:flex-row items-center justify-between mt-20 md:gap-10">
        <ContactForm />
      <div className="flex flex-col items-center justify-center md:w-1/2 w-full rounded-2xl shadow-3xl px-10 py-10 shadow-2xl">
        <h2 className="text-3xl text-center mb-5">İletişim Bilgileri</h2>
        <p className="text-gray-500 text-center mb-10">Aşağıdaki bilgilerden bize istediğiniz zaman ulaşabilirsiniz...</p>
        <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <MapIcon size={16} className="text-purple-700" />
          <span className="ms-3">Hacıahmet, Kurtuluş Deresi Cd. No:29, 34440 Beyoğlu/İstanbul</span>
        </div>
        <Separator />
        <div className="flex items-center mb-4">
          <PhoneCallIcon size={16} />
          <span className="ms-3">+90 555 555 55 55</span>
        </div>
        <Separator />
        <div className="flex items-center mb-4">
          <FaEnvelope size={16} />
          <span className="ms-3">ediz@iletisim.com</span>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default IletisimPage