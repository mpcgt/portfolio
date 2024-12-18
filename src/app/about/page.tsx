import Banner from "../banner";
import Footer from "../footer";
import Navbar from "../navbar";

export default function About() {
  return (
    <>
      <Banner />
      <Navbar />
      <section className="min-h-screen py-20 bg-black px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-4 ahsing">
          Coming soon! 🤠
        </h2>
      </section>
      <Footer />
    </>
  );
}
