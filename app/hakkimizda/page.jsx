import { Button } from "@/components/ui/button"
import Image from "next/image"

const HakkimizdaPage = () => {
  return (
    <div className="xl:px-36 md:px-16 py-8 px-4">
      <h2 className="text-3xl font-semibold mb-5 text-center">Hakkımızda</h2>
      <div className="shadow-2xl rounded-2xl px-10 py-10">
        <div className="flex items-center gap-5">
          <Image src={"/logo.png"} alt="logo" height={400} width={400} className="h-20 w-20 border border-2 rounded-full" />
          <div>
            <h1 className="text-2xl font-bold">Ardemy</h1>
            <span className="text-purple-600 text-xs">Dil Okulu</span>
          </div>
        </div>
        <p className="mt-5 text-slate-600">Ardemy, dil öğreniminin kişisel gelişimde ve kariyer yolculuğunda ne kadar belirleyici olduğunu bilen bir ekip tarafından kuruldu. Amacımız; herkesin, bulunduğu yerden ve kendi hızında, kaliteli bir İngilizce eğitimi alabilmesini sağlamak. Geleneksel yöntemlerden uzak, modern ve etkileşimli bir eğitim modeli sunuyoruz.
          İster başlangıç seviyesinde olun, ister ileri düzeyde pratik yapmak isteyin; Ardemy size uygun bir öğrenme deneyimi sunar.

          Platformumuzda bulunan dersler; konuşma, dinleme, okuma ve yazma becerilerini geliştirecek şekilde tasarlanmıştır. Üstelik her öğrenciye özel öğrenme planlarıyla, ihtiyaç duyduğunuz alanlara odaklanabilirsiniz. Gelişiminizi düzenli olarak takip ediyor, eksiklerinizi anlık olarak tespit ediyor ve sizi bir üst seviyeye taşıyoruz.

          Yalnızca İngilizce öğretmiyoruz; aynı zamanda öğrenmeyi öğrenmenize yardımcı oluyoruz. Kendi potansiyelinizi keşfetmeniz ve dil bariyerini aşmanız için her zaman yanınızdayız. Ardemy olarak, sadece bir eğitim platformu değil, aynı zamanda güvenilir bir öğrenme yol arkadaşınız olmayı hedefliyoruz.
        </p>
        <Button className={"mt-5 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300 bg-purple-700"}>Randevu Oluştur</Button>
      </div>
    </div>
  )
}

export default HakkimizdaPage