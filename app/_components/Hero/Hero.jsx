"use client"
import { motion } from "motion/react"
import Image from "next/image"
import CountUp from 'react-countup';


const Hero = () => {
    return (
        <div className="flex items-center bg-slate-200 xl:px-36 md:px-16 py-8 px-4 gap-10">
            <div className="">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-5 md:text-4xl text-2xl font-extrabold">SADECE 1 DEMO DERS İLE İSTEDİĞİNİZ DİLDE "BEN ÇALIŞIYORUM AMA O ÇALIŞMIYOR" DEMEK İSTER MİSİNİZ ?</motion.h1>
                <motion.p
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-5 text-gray-500">Bugüne kadar 1000+ saat özel ders gerçekleştirdik ve gerçekleştirmeye devam ediyoruz. Sizde istediğiniz dili akıcı bi şekilde konuşmak istiyorsanız hemen iletişime geçin!</motion.p>
                <motion.a
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    href="/iletisim" className="px-5 py-2 md:text-lg text-sm bg-red-500 text-white rounded-3xl duration-300 hover:text-black hover:bg-white hover:border-2">İLETİŞİME GEÇ</motion.a>
                <div className="flex md:flex-row flex-col md:items-center md:mt-20 mt-10 justify-between gap-5">
                    <div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex items-center gap-1">
                            <CountUp end={1000} className="md:text-2xl text-xl text-green-500 font-bold" />
                            <span className="text-green-500 font-bold text-2xl">+</span>
                        </motion.div>
                        <h5 className="md:text-2xl text-xl md:mt-1">Saat beraber <br /> işlenen ders</h5>
                    </div>
                    <div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex items-center gap-1">
                            <CountUp end={8000} className="md:text-2xl text-xl text-blue-500 font-bold" />
                            <span className="text-blue-500 font-bold text-2xl">+</span>
                        </motion.div>
                        <h5 className="md:text-2xl text-xl md:mt-1">Yeni öğrenilen kelime</h5>
                    </div>
                    <div>
                        <motion.div
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex items-center md:gap-1">
                            <CountUp end={50} className="md:text-2xl text-xl text-red-500 font-bold" />
                            <span className="text-red-500 font-bold text-2xl">+</span>
                        </motion.div>
                        <h5 className="md:text-2xl text-xl md:mt-1">Başarılı sınav</h5>
                    </div>

                </div>
            </div>
            <div className="md:flex hidden items-center justify-center">
                <Image src={"/ediz.png"} alt="hero image" height={1000} width={1000} />
            </div>
        </div>
    )
}

export default Hero