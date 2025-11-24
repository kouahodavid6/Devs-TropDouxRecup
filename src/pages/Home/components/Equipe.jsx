import { developpeurs } from "../../../data/data";
import { Linkedin, MessageCircle } from "lucide-react";

const Equipe = () => {
    return(
        <section id="team" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* En-tête */}
                <div className="text-center mb-12 sm:mb-16 px-4">
                    <span className="text-[#ff7a00] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 sm:mb-4 block">
                        Notre Équipe
                    </span>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                        L'Équipe de développement
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Trois développeurs spécialisés, une vision unifiée. Rencontrez les experts qui ont donné vie à TropDouxRécup.
                    </p>
                </div>

                {/* Grille des développeurs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
                    {developpeurs.map((dev, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#ff7a00] hover:-translate-y-1 sm:hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-900">
                                <img 
                                    src={dev.image}
                                    alt={dev.name}
                                    className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                            </div>

                            {/* Contenu */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 leading-tight">
                                    {dev.name}
                                </h3>

                                <div className="inline-block bg-[#ff7a00] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                                    {dev.role}
                                </div>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                                    {dev.bio}
                                </p>

                                {/* Technologies */}
                                <div className="mb-4 sm:mb-6">
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 sm:mb-3">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {dev.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold border border-gray-200 whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Boutons de contact */}
                                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                                    <a
                                        href={dev.linkedin}
                                        className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#ff7a00] hover:text-black transition-colors duration-300 font-semibold text-xs sm:text-sm min-h-[44px]"
                                        aria-label={`LinkedIn de ${dev.name}`}
                                    >
                                        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        LinkedIn
                                    </a>
                                    <a
                                        href={dev.whatsapp}
                                        className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#ff7a00] hover:text-black transition-colors duration-300 font-semibold text-xs sm:text-sm min-h-[44px]"
                                        aria-label={`WhatsApp de ${dev.name}`}
                                    >
                                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Equipe;