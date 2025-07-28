import { Instagram, InstagramIcon, MapIcon, PhoneCallIcon } from "lucide-react"
import Link from "next/link"
import { FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa"
import { Button } from "../ui/button"
import Image from "next/image"
import { Separator } from "@radix-ui/react-separator"

const Footer = () => {
    return (
        <div className="bg-black md:px-16 px-10 md:py-36 py-12 text-white flex flex-col md:flex-row justify-between gap-10 relative md:mt-64">
            <div className="absolute hidden bg-purple-700 h-[200px] md:h-[350px] md:w-[1000px] w-[400px] px-10 py-6 md:-top-65 -top-40 right-1/2 translate-x-1/2 md:flex items-center justify-between shadow-2xl rounded-2xl">
                <div className="">
                    <h1 className="md:mb-2 md:text-2xl text-2xl font-bold">Dersler nasıl mı işliyor ?</h1>
                    <p className="md:mb-2 text-sm w-[600px]">Eğitmenlerimiz, öğrencinin daha önce hiçbir bilgiye sahip olmadığı bir dili dahi ilk dersten <br /> itibaren anlamlandırabilmesini hedefler. Bu doğrultuda, başlangıç derslerinde öncelikle temel özne kalıpları işlenir ve en sık kullanılan fiillerden bazılarıyla desteklenir. Öğrenciler, yalnızca 10 dakika içerisinde “Biz bugün orada çalışıyoruz” gibi basit ama işlevsel cümleleri kurabilecek düzeye ulaşır. Derslerimizde öğrencinin yalnızca pasif bir dinleyici değil, aktif bir katılımcı olması esas alınır. Bu nedenle öğrenci, derste en az eğitmen kadar konuşur. Bu yaklaşım sayesinde öğrenci, öğrenmeye başladığı dili yalnızca duymakla kalmaz; onu kullanarak üretir. Temel cümleleri kendi çabasıyla kurabildiğini fark eden öğrenciler, bu başarı hissiyle derse daha motive bir şekilde devam eder. Her öğrencinin öğrenme hızı farklıdır. Bu nedenle dersin temposu, öğrencinin bireysel gelişimine göre şekillendirilir. Belirli bir yetkinliğe ulaşan öğrenciler ise konuşma odaklı seanslarla pratik becerilerini geliştirme fırsatı bulurlar.</p>
                    <Button className={"cursor-pointer hover:-translate-y-1 duration-300"}>Hemen İletişime Geç</Button>
                </div>
                <div className="">
                    <Image src={"/footerimage.png"} alt="footer image h-{1000px} w-96" height={1000} width={800} />
                </div>
            </div>
            
            <div className="flex flex-col gap-3 max-w-3xs">
                
                <h1 className="text-2xl font-bold">Ediz Sevinçler</h1>
                <p className="text-sm text-gray-500">Ardemy’i kurarken amacımız çok netti: İngilizce öğrenmenin herkes için ulaşılabilir, etkili ve kişiselleştirilmiş olmasını sağlamak.
                    Klasik yöntemlerden sıkılan, gerçek hayatta işe yarayacak şekilde İngilizcesini geliştirmek isteyen herkese modern, etkileşimli bir deneyim sunuyoruz.
                    Biz sadece dil öğretmiyoruz; aynı zamanda öğrenmeyi öğrenmenize, kendinize güvenmenize ve potansiyelinizi keşfetmenize yardımcı oluyoruz.
                    Ardemy, sizin bulunduğunuz yerden başlayarak, kendi hızınızda ilerleyebileceğiniz bir yol arkadaşı.
                    Hedefimiz, İngilizce öğrenme yolculuğunu herkes için daha insani, daha keyifli ve daha etkili hale getirmek.</p>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Bağlantılar</h1>
                <div className="flex flex-col gap-3">
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        Anasayfa
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        Hakkımda
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        Sıkça Sorulan Sorular
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        İletişim
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">Sosyal Medya</h1>
                <div className="flex flex-col gap-3">
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer flex gap-2">
                        <Instagram />
                        <span>Instagram</span>
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer flex gap-2">
                        <FaTelegram size={26} />
                        <span>Telegram</span>
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer flex gap-2">
                        <FaWhatsapp size={26} />
                        <span>Whatsapp</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold">İletişim</h1>
                 <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <MapIcon size={16} />
          <span className="ms-3">Hacıahmet, Kurtuluş Deresi Cd. No:29, 34440 Beyoğlu/İstanbul</span>
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
    )
}

export default Footer