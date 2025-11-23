import Hero from "./components/Hero";
import Equipe from "./components/Equipe";
import CollaborationSynergie from "./components/CollaborationSynergie";
import Footer from "./components/Footer";

const Home = () => {
    return(
        <>
            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}
            <div data-aos="fade-up" data-aos-duration="500">
                <Equipe />
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
                <CollaborationSynergie />
            </div>
            <Footer />
        </>
    );
}

export default Home;