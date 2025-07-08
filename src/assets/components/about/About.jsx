import React from 'react'
import stackOfBooks from '../../image/stack-of-books.png'
import brain from '../../image/brain.png'
import next from '../../image/next.png'


const About = () => {
    return (
        <section
            id="about"
            className=" about bg-white px-4 py-10 md:px-[5%] md:py-0 w-full min-w-0 md:min-w-[1440px] md:h-[400px] flex flex-col"
        >
            <h1 className=" my-6 text-center text-2xl md:text-[36px] text-[#0A0F1C] mb-6 md:mb-[22px] font-bold">
                Pourquoi eduplus ?
            </h1>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-around flex-1">
                <div className="flex flex-col items-start w-full md:w-[340px] min-h-[230px] rounded-[18px] border-none bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-6 md:p-[28px_22px] shadow-[0_6px_24px_rgba(10,15,28,0.12),0_1.5px_6px_rgba(52,152,219,0.10)] transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(10,15,28,0.18),0_3px_12px_rgba(52,152,219,0.15)]">
                    <div className="flex items-center gap-3 mb-4 md:mb-[18px] text-left">
                        <img src={stackOfBooks} width="32" alt="" />
                        <h2 className="text-base md:text-[1.25rem] text-[#0A0F1C] m-0 font-semibold">
                            Accès gratuit à des ressources de qualité
                        </h2>
                    </div>
                    <div className="text-left text-[#0A0F1C] text-base md:text-[20px] leading-[1.5]">
                        <p>
                            Télécharge gratuitement des cours, fiches et exercices. Chaque ressource est vérifiée et classée par matière et niveau scolaire.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full md:w-[340px] min-h-[230px] rounded-[18px] border-none bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-6 md:p-[28px_22px] shadow-[0_6px_24px_rgba(10,15,28,0.12),0_1.5px_6px_rgba(52,152,219,0.10)] transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(10,15,28,0.18),0_3px_12px_rgba(52,152,219,0.15)]">
                    <div className="flex items-center gap-3 mb-4 md:mb-[18px] text-left">
                        <img src={brain} width="32" alt="" />
                        <h2 className="text-base md:text-[1.25rem] text-[#0A0F1C] m-0 font-semibold">
                            Apprentissage à son rythme
                        </h2>
                    </div>
                    <div className="text-left text-[#0A0F1C] text-base md:text-[20px] leading-[1.5]">
                        <p>
                            Avance selon ton propre rythme. Revois les notions à tout moment, selon ton emploi du temps et tes besoins.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full md:w-[340px] min-h-[230px] rounded-[18px] border-none bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-6 md:p-[28px_22px] shadow-[0_6px_24px_rgba(10,15,28,0.12),0_1.5px_6px_rgba(52,152,219,0.10)] transition-transform duration-200 hover:scale-[1.03] hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(10,15,28,0.18),0_3px_12px_rgba(52,152,219,0.15)]">
                    <div className="flex items-center gap-3 mb-4 md:mb-[18px] text-left">
                        <img src={next} width="32" alt="" />
                        <h2 className="text-base md:text-[1.25rem] text-[#0A0F1C] m-0 font-semibold">
                            Partage entre élèves et étudiants
                        </h2>
                    </div>
                    <div className="text-left text-[#0A0F1C] text-base md:text-[20px] leading-[1.5]">
                        <p>
                            Dépose tes fiches, cours ou corrigés. Aide les autres et fais vivre une communauté éducative solidaire et active.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About