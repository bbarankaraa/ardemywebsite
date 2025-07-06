import { HomeIcon } from "lucide-react"

const Why = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between xl:px-36 md:px-16 py-8 px-4 md:gap-10 gap-20 mt-20">
        <div className="md:w-9/12">
            <h2 className="text-3xl font-semibold mb-5">Neden beni seçmelisiniz?</h2>
            <p className="mb-5 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis laboriosam id quo amet quasi consequatur vitae necessitatibus dicta alias labore molestiae a quis ipsam, facilis hic natus aperiam dolore nesciunt optio dignissimos animi voluptas facere, ullam quod? Dicta, quae nam.</p>
            <a
                    href="" className="px-5 py-2 md:text-lg text-sm bg-red-500 text-white rounded-3xl duration-300 hover:text-black hover:bg-white hover:border-2">İLETİŞİME GEÇ</a>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <HomeIcon className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Lorem ipsum</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus?</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <HomeIcon className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Lorem ipsum</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus?</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <HomeIcon className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Lorem ipsum</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus?</p>
            </div>
            <div className="flex flex-col justify-center rounded border border-gray-300 shadow-2xl px-8 py-4 hover:scale-105 duration-300">
                <HomeIcon className="text-red-500 mb-3" size={24} />
                <h3 className="text-lg">Lorem ipsum</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus?</p>
            </div>

        </div>
    </div>
  )
}

export default Why