import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Video = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between xl:px-36 md:px-16 py-8 px-4 md:gap-10 gap-20 mt-20">
        <div className="relative">
            <iframe className="z-10 md:w-[560px] md:h-[415px] h-[200px]" src="https://www.youtube.com/embed/jNI0fiX4q4A?si=mNpozjjIpuay1AEW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <Image className="-z-10 absolute top-10 -left-30" src={"/dots.webp"} alt="dots" width={400} height={400} />
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">ÖĞRENCİLERİMİN DERSLERİM HAKKINDA DÜŞÜNDÜKLERİ</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis quibusdam dignissimos veniam excepturi itaque animi, dolorum saepe ratione quaerat placeat beatae similique enim reprehenderit natus iste ab at aspernatur unde ullam provident? Autem asperiores eos ex consequuntur. Ab quae est tempora! Voluptatibus debitis perferendis, enim quia natus recusandae quam.</p>
            <Link href={"/iletisim"}>
            <Button className={"cursor-pointer"}>Hemen iletişime geç!</Button>
            </Link>
        </div>
    </div>
  )
}

export default Video