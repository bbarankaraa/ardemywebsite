import { InstagramIcon } from "lucide-react"
import Link from "next/link"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import { Button } from "../ui/button"
import Image from "next/image"

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
                <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, tenetur. Quam eaque, repudiandae id explicabo sit, accusamus nihil dolorum minus, nobis sint fuga. Repudiandae libero fugit placeat earum debitis minus totam ullam voluptatem. Totam quae in omnis quibusdam ipsum iste atque, facilis nihil veniam earum, nulla vero culpa, sequi dicta.</p>
                <div className="flex items-center gap-3">
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        <InstagramIcon />
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        <FaWhatsapp size={26} />
                    </Link>
                    <Link href={""} className="hover:text-red-500 duration-300 cursor-pointer">
                        <FaTelegram size={26} />
                    </Link>
                </div>
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
        </div>
    )
}

export default Footer