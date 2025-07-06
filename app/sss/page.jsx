import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-2xl"}>Dersler nasıl işleniyor?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum assumenda amet, illum unde sapiente fugit? Ipsa sapiente, voluptate sit atque quasi sunt aliquam est veniam repellendus pariatur in quae labore ex nemo harum delectus cum aut assumenda optio porro. Praesentium ducimus incidunt error magnam voluptates, quo quia. Molestiae, ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorum at doloribus aspernatur. Obcaecati consequatur, id eius, quis perspiciatis similique aperiam non ullam cum sit rerum ex inventore nisi reprehenderit minima ipsam dignissimos suscipit enim. Eligendi placeat labore adipisci ipsa!
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={"text-2xl"}>Ödeme Nasıl Yapılıyor</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere excepturi, distinctio quibusdam dolorem velit quo sint quisquam tempora laboriosam quam! Ea accusamus alias blanditiis soluta quibusdam, adipisci facilis aut distinctio eveniet saepe ipsam voluptatibus fugit in asperiores mollitia nemo doloremque sapiente? Placeat distinctio harum magni nihil corrupti et, deserunt eos.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea repellat, et unde repudiandae, ipsa iure esse, illum exercitationem dolore placeat eum aliquid velit cumque quo soluta praesentium. Consequuntur, magnam beatae.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={"text-2xl"}>Ders saatleri nasıl ayarlanıyor?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className={"text-2xl"}>Eğitmen seçebiliyor muyum?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  )
}

export default SssPage