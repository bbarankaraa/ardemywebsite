import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "S.S.S."
}

const questions = [
  {
    id:1,
    question: "Dersler nasıl işleniyor?",
    answer: "Okullardaki veya kurslardaki metodun aksine öğrencinin de eğitmen kadar konuştuğu bir ders söz konusudur, Bu sayede öğrenciler ilk dersten temel cümle yapılarını kurabiliyorlar ve bunları yaptıklarını farkettikleri anda motive oluyorlar. Sistem olarak işleyiş zoom üzerinden gerçekleşmektedir ve ders sonu ilgili eğitmenin oluşturduğu word dosyası öğrenciye atılır bu sayede öğrenci yaptığı çalışmaları inceleyip bir sonraki derse hazır hale gelir."
  },
  {
    id:2,
    question: "Ödeme nasıl yapılıyor?",
    answer: "Ödeme, alıcıya ait banka hesabına IBAN numarası aracılığıyla havale yoluyla gerçekleştirilmektedir. Gerekli banka bilgileri tarafınıza iletilerek, transfer işlemi güvenli şekilde tamamlanabilir.”"
  },
  {
    id:3,
    question: "Ders saatleri nasıl ayarlanıyor?",
    answer: "Öğrenci ders saatlerini kendisine verilen eğitmen ile iletişime geçerek iki tarafında müsait olduğu bir zaman dilimine göre ayarlanmaktadır."
  },
  {
    id:4,
    question: "Eğitmen seçebiliyor muyum?",
    answer: "Eğitmen seçimi bir çok faktöre bağlıdır, bu faktörler genel olarak eğitmenin müsaitliği ve yoğunluğu gibi durumlara bağlıdır. Eğitmen açısından herhangi bir uyuşmazlık söz konusu değil ise öğrenci eğitmen seçebilir."
  },
  {
    id:5,
    question: "Hangi konular işlenecek ve hangi sırayla?",
    answer: "Genel olarak işlenecek kalıp ve durumların konu ismi ile verilmesi uygun değildir. Öğrenci aldığı derste yeni ise ilk dersten temel özne kalıpları ve basit fiil cümleleri işlenmektedir. Öğrencinin performansına göre farklı fiil,kelime ve yapılar zaman geçtikçe öğrenciye verilir"
  },
  {
    id:6,
    question: "Kurs ücreti nedir, taksit imkanı var mıdır?",
    answer: "Kurs ücretine ilişkin detaylı bilgilendirme, öğrencinin ücretsiz deneme dersine katılımının ardından, ihtiyaç ve seviyesine uygun program netleştirildikten sonra paylaşılmaktadır. Ödeme konusunda ise, katılımcılarımıza taksitli ödeme imkânı sunulmakta olup, esnek ödeme planları oluşturulabilmektedir."
  },
  {
    id:7,
    question: "Kurs sonunda danışmanlık hizmeti sağlıyor musunuz?",
    answer: "Kurs sonrasında katılımcılarımız, eğitmenle iletişimde kalmaya devam edebilirler. Eğitim süreci sonlandıktan sonra da, dersle ilgili konularda soru sormak ve danışmak isteyen öğrencilerimize"
  },
  {
    id:8,
    question: "Uygulamalı çalışmalar var mı yoksa teorik mi?",
    answer: "Kursun temel mantığı, öğrenciyi ilk dersten temel cümle yapılarını kullanarak konuşturmak olduğu için teorik çalışmalara asla yer yoktur. Öğrenci öğrendiği her kelimeli,fiili ve yapıyı eğitmeni ile karşılıklı olarak her ders sözlü bir şekilde kullanmalıdır."
  },
  {
    id:9,
    question: "Sertifika veriyor musunuz?",
    answer: "Eğitim sonunda katılımcılara, kurumumuz tarafından hazırlanmış özel sertifikalar sunulmaktadır. Bu sertifika, eğitimin başarıyla tamamlandığını belgelendiren kurumsal bir belgedir. Ancak belirtmek isteriz ki; bu sertifika Milli Eğitim Bakanlığı gibi resmî kurumlarca tanınan bir belge niteliğinde değildir."
  },
  {
    id:10,
    question: "Ders materyalleri size mi ait, biz mi temin ediyoruz?",
    answer: "Ders müfredat üzerinden işlendiğinden dolayı öğrencinin herhangi bir kaynak temin etmesi asla gerekli değildir, Derste işlenen kalıplar öğrenci için fazlasıyla yeterlidir."
  },
  {
    id:11,
    question: "Daha önce hangi kitlelere ders verdiniz?",
    answer: "Şimdiye kadar çok farklı profillerle çalışma fırsatımız oldu. Eğitim verdiğimiz kişiler arasında şirket yöneticileri, belediye başkanları gibi üst düzey katılımcılar olduğu gibi, okul çağındaki çocuklara da ders verdik. Bu sayede hem profesyonel dünyaya, hem de çocuklara yönelik eğitim stratejileri geliştirme konusunda ciddi bir deneyim kazandık."
  },
  {
    id:12,
    question: "Bu kurs hangi seviyeye uygundur?",
    answer: "Kursun seviyesi, ders almaya başlayan katılımcının mevcut bilgi ve yeterlilik düzeyine göre belirlenmektedir. Eğitim müfredatı, bireysel ihtiyaç ve hedefler doğrultusunda esnek biçimde yapılandırılmaktadır."
  },

]

const SssPage = () => {
  return (
    <div className="xl:px-36 md:px-16 py-8 px-4">
      <h2 className="text-3xl font-semibold mb-5 text-center">Sıkça Sorulan Sorular</h2>
      <div>
        <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {questions.map((question) => (
        <AccordionItem value={`item-${question.id}`} key={question.id}>
        <AccordionTrigger className={"text-2xl"}>{question.question}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            {question.answer}
          </p>
        </AccordionContent>
      </AccordionItem>
      ))}
    </Accordion>
      </div>
    </div>
  )
}

export default SssPage