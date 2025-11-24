import { Smartphone, Database, Code2 } from "lucide-react";

const CollaborationSynergie = () => {
    return(
        <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff7a00] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7a00] rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#ff7a00] text-sm font-bold tracking-widest uppercase mb-4 block">
                        Collaboration & Synergie
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Où l'Expertise Rencontre l'Excellence
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        Nos compétences diverses s'intègrent parfaitement pour créer des applications robustes, évolutives et conviviales.
                        Chaque membre de l'équipe apporte une expertise spécialisée qui complète les autres, créant une puissance de développement
                        capable de fournir des solutions de bout en bout.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#ff7a00] transition-all duration-300 group">
                        <div className="w-16 h-16 bg-[#ff7a00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Smartphone className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Excellence Mobile</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Des expériences mobiles natives construites avec React Native, assurant une performance fluide sur les plateformes iOS et Android.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#ff7a00] transition-all duration-300 group">
                        <div className="w-16 h-16 bg-[#ff7a00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Database className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Backend Robuste</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Architecture serveur évolutive avec Laravel, bases de données optimisées et APIs sécurisées qui alimentent nos applications de manière fiable.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-[#ff7a00] transition-all duration-300 group">
                        <div className="w-16 h-16 bg-[#ff7a00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Code2 className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Maîtrise Web</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Des interfaces web modernes et réactives conçues avec React et Tailwind CSS, offrant des designs pixel-perfect et une UX exceptionnelle.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-[#ff7a00]/10 to-[#ff7a00]/5 border border-[#ff7a00]/20 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Le Résultat : <span className="text-[#ff7a00]">TropDouxRécup</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            En combinant l'expertise mobile, la robustesse backend et l'excellence du design web, nous avons créé une application complète
                            qui exemplifie les normes modernes de développement. Nos compétences complémentaires assurent que chaque couche
                            de la pile est construite avec la plus haute qualité, de la base de données à l'interface utilisateur.
                        </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#ff7a00] mb-2">3</div>
                                <div className="text-sm text-gray-400">Spécialistes</div>
                            </div>
                            <div className="w-px bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#ff7a00] mb-2">1</div>
                                <div className="text-sm text-gray-400">Équipe Unifiée</div>
                            </div>
                            <div className="w-px bg-gray-700"></div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#ff7a00] mb-2">100%</div>
                                <div className="text-sm text-gray-400">Synergie</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CollaborationSynergie;