import { Button } from "@/components/ui/button"
import Link from "next/link"


const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-96 gap-5">
            <h3 className="text-3xl">
                Böyle bir sayfa bulunamadı!
            </h3>
            <Link href={"/"}>
                <Button className={"cursor-pointer"}>Anasayfaya dön</Button>
            </Link>
        </div>
    )
}

export default NotFound