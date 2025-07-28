import { Button } from "@/components/ui/button"
import Link from "next/link"


const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h3 className="text-3xl">
                Böyle bir sayfa bulunamadı!
            </h3>
            <Link href={"/"}>
                <Button>Anasayfaya dön</Button>
            </Link>
        </div>
    )
}

export default NotFound