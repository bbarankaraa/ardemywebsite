"use client"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { AiOutlineSelect } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Process = () => {
  return (

    <div className="relative">
      <Image src={"/dots2.jpg"} alt="dots" width={1000}
        height={1000} className="absolute -bottom-10 rotate-180 -z-10 w-full h-full" />
      <div className="xl:px-36 md:px-16 py-8 px-4 gap-5 md:gap-10 mt-5 flex items-center flex-col">
        <h2 className="text-center md:text-4xl text-3xl font-semibold md:mb-10">Sürec Nasıl İşliyor ?</h2>
        <div className="grid md:grid-cols-3 md:gap-10 gap-3 w-full relative">
          <Card>
            <CardHeader>
              <CardTitle className={"md:text-3xl text-xl"}>İletişim</CardTitle>
            </CardHeader>
            <CardContent>
              <FaPhoneAlt className="md:text-6xl text-5xl md:text-start text-center text-purple-700" />
            </CardContent>
            <CardFooter>
              <p>Bizle iletişime geçin ve sizlere sunduğumuz hizmetten bahsedelim, bu sayede kafanızda bir soru işareti kalmasın ve hizmetimizin kalitesini kendi gözlerinizle görün</p>
            </CardFooter>
          </Card>
          <Card className={"shadow-xl"}>
            <CardHeader>
              <CardTitle className={"md:text-3xl text-xl"}>Paket</CardTitle>
            </CardHeader>
            <CardContent>
              <AiOutlineSelect className="md:text-6xl text-5xl md:text-start text-center text-purple-700" />
            </CardContent>
            <CardFooter>
              <p>Derslere başlamak istediğiniz paketi seçerek kendinizi geliştirmeye ve eğitim sürecine bir başlangıç yapın...</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className={"md:text-3xl text-xl"}>Hazırsınız!</CardTitle>
            </CardHeader>
            <CardContent>
              <SiTicktick className="md:text-6xl text-5xl md:text-start text-center text-purple-700" />
            </CardContent>
            <CardFooter>
              <p>Belirlediğiniz gün ve saatlerde artık ders almaya hazırsınız!</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Process