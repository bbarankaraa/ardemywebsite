import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

const languageCards = [
  {
    id: 1,
    title: "İngilizce",
    image: "/English.png"
  },
  {
    id: 2,
    title: "Rusça",
    image: "/Russian.jpg"
  },
  {
    id: 3,
    title: "Almanca",
    image: "/German.webp"
  }
]

const Languages = () => {
  return (
    <div className='xl:px-36 md:px-16 py-8 px-4 gap-5 md:gap-10'>
      <h2 className="text-center md:text-4xl text-2xl font-semibold md:mb-10 mb-5 mt-5">Eğitimini Verdiğimiz Diller</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {languageCards.map((language) => (
          <Card key={language.id} className={"hover:-translate-y-3 duration-300"}>
            <CardHeader>
              <CardTitle className={"text-2xl text-center"}>
                {language.title}
              </CardTitle>
              <CardDescription></CardDescription>
              <CardAction></CardAction>
            </CardHeader>
            <CardContent className={"flex justify-center"}>
              <Image src={language.image} alt={`${language.title} Dili`} height={100} width={100} className="h-44 w-72 md:h-full md:w-full" />
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Languages