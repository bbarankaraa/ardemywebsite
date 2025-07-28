import Link from "next/link"
import { FaCheck } from "react-icons/fa"

const Why = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between xl:px-36 md:px-16 py-8 px-4 md:gap-10 gap-20 mt-5">
        <div className="md:w-9/12">
            <h2 className="text-3xl font-semibold mb-5">Neden bizi seçmelisiniz?</h2>
            <p className="mb-5 text-gray-500">Yalnızca öğretmeniniz değil, yol arkadaşınız oluyoruz. Sıfırdan başlayan öğrencilerimizle bile daha ilk derste cümle kurmaya başlıyoruz. Konuşarak öğrenmeye dayalı, sizin hızınıza uygun bir sistemle birlikte ilerliyoruz. Çünkü önemli olan, öğrendiğimizi hissetmemiz.</p>
            <Link href="/iletisim" className="px-5 py-2 md:text-md text-sm bg-purple-500 text-white rounded-3xl duration-300 hover:text-black hover:bg-white hover:border-2">İLETİŞİME GEÇ</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <FaCheck className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Öğreten Değil, Yol Gösteren</h3>
                <p className="text-sm">Size hazır bilgi sunmak yerine, kendi cümlelerinizi kurmanız için gerekli zemini hazırlarım. Öğrenmeyi öğrenirsiniz.</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <FaCheck className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Konuşmadan Geçilmeyen Dersler</h3>
                <p className="text-sm">Pasif kalmazsınız. Derste sürekli konuşarak, dili duyarak değil kullanarak öğrenirsiniz.</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <FaCheck className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Hızınızda İlerleyen Sistem</h3>
                <p className="text-sm">Ne geride kalırsınız, ne de yetişmek zorunda hissedersiniz. Sistem size değil, siz sisteme yön verirsiniz.</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <FaCheck className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Motive Eden Sonuçlar</h3>
                <p className="text-sm">İlk dakikalardan itibaren başardığınızı görürsünüz. Bu özgüvenle devam etmek çok daha kolay hale gelir.</p>
            </div>

        </div>
    </div>
  )
}

export default Why