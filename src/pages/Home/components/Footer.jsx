import { Code2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffa700] rounded-lg flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <div className="font-bold text-lg">Devs Équipe</div>
                            <div className="text-sm text-gray-400">Trop Doux Récup</div>
                        </div>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Équipe de Développement Trop Doux Récup
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Construit avec passion et expertise
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        Vous recherchez une équipe de développement talentueuse ?{' '}
                        <span className="text-[#ffa700] font-semibold">Nous sommes disponibles pour de nouveaux projets.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;