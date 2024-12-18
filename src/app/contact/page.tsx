import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../navbar";
import Banner from "../banner";
import Footer from "../footer";

export default function Contact() {
  return (
    <>
      <Banner />
      <Navbar />
      <section className="min-h-screen py-20 bg-black px-4">
        <h2 className="text-3xl text-white font-bold text-center mb-4 ahsing">
          Contact us
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Please contact me directly if you have any questions.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 max-w-6xl mx-auto">
          <div className="space-y-6 md:w-1/3">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Contact me by e-mail
              </h3>
              <p className="text-gray-400">sgn.ntwk@gmail.com</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">
                You can find me on my GitHub to discover my projects, websites
                and other achievements.
              </p>
              <Link
                href="https://github.com/mpcgt"
                target="blank"
                className="text-indigo-400 flex items-center mt-2"
              >
                Go to my GitHub <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <form className="md:w-2/3">
            <input
              type="text"
              placeholder="Name (Coming soon!)"
              className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
              disabled
            />
            <input
              type="email"
              placeholder="Email (Coming soon!)"
              className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
              disabled
            />
            <textarea
              placeholder="Write your message (Coming soon!)"
              className="w-full bg-gray-800 text-white p-3 rounded-2xl mb-4"
              rows={4}
              disabled
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-400 text-black px-6 py-3 rounded-full w-full font-semibold"
              disabled
            >
              Send (Coming soon!)
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
