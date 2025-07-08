import React from 'react'
import imgGraduation1 from '../../image/graduation (1).png'
import imgGraduation2 from '../../image/Copie de graduation.png'

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-[80vh] p-[5%] relative bg-gradient-to-br from-blue-700 to-blue-400 flex items-center justify-center"
        >
            <div className="w-full h-full flex flex-col-reverse md:flex-row items-center justify-center">
                <div className="left text-center md:text-left">
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[64px] text-white mb-4 font-bold leading-tight">
                        Apprends, Dépose,<br /> Télécharge Gratuitement !
                    </h1>
                    <p className="text-base xs:text-lg sm:text-xl md:text-[20px] text-white mb-4">
                        La plateforme éducative pour tous les niveaux.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-5 py-2.5 bg-blue-500 rounded-[10px] text-white text-base xs:text-lg md:text-[20px] transition-all duration-300 hover:bg-[#0A0F1C]"
                    >
                        Voir les fiches
                    </a>
                </div>
                <div className="right mb-8 md:mb-0 md:ml-12 flex justify-center">
                    <img src={imgGraduation2} alt="" className="w-[140px] xs:w-[180px] sm:w-[200px] md:w-[220px] max-w-xs" />
                </div>
            </div>
            <img
                src={imgGraduation1}
                width="40"
                alt=""
                className="hidden xs:block absolute top-[20px] right-[10px] sm:top-[50px] sm:right-[50px]"
            />
            <img
                src={imgGraduation2}
                width="40"
                alt=""
                className="hidden xs:block absolute top-[60px] left-[10px] sm:top-[100px] sm:left-[60px]"
            />
            <img
                src={imgGraduation1}
                width="40"
                alt=""
                className="hidden xs:block absolute bottom-[20px] left-[30%] sm:bottom-[40px] sm:left-[35%]"
            />
        </section>
    )
}

export default Hero