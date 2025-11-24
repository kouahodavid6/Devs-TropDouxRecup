import { ChevronDown } from "lucide-react";

const Hero = () => {
    const scrollToTeam = () => {
        document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <header className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff7a00] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff7a00] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="mb-8 inline-block">
                    <span className="text-[#ff7a00] text-sm font-bold tracking-widest uppercase">Équipe de Développement</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Les Cerveaux Derrière
                    <span className="block text-[#ff7a00] mt-2">L'Application</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
                    Nous Avons Construit <span className="text-[#ff7a00] font-semibold">Trop Doux Récup</span>
                </p>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    Une équipe synergique de trois développeurs spécialisés créant des expériences numériques exceptionnelles
                </p>

                <button
                    onClick={scrollToTeam}
                    className="group inline-flex items-center gap-2 bg-[#ff7a00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ff9100] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff7a00]/50"
                >
                    Rencontrer l'Équipe
                    <ChevronDown className="w-5 h-5 transition-transform" />
                </button>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="w-6 h-6 text-[#ff7a00]" />
            </div>
        </header>
    );
}

export default Hero;