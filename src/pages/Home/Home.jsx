import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Home = () => {
    return(
        <>
            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}

            <Footer />
        </>
    );
}

export default Home;