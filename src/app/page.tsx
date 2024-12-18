import Banner from "./banner";
import Navbar from "./navbar";
import TechStack from "@/components/ui/techStack";
import Image from "next/image";
import Avatar from "../assets/img/me.png";
import France from "../assets/img/fr.png";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      <Banner />
      <Navbar />
      <div className="flex items-start justify-center pt-24 py-8">
        <div className="flex items-start justify-between w-full max-w-6xl px-4">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-bold">Hey, I&apos;m Max ✌🏼</h1>
            <p className="mt-4 text-lg text-muted-foreground flex items-center">
              I&apos;m a passionate developer from France.
              <Image
                src={France}
                alt="France"
                width={24}
                height={24}
                className="ml-2"
              />
            </p>

            <p
              className="mt-4 text-lg text-muted-foreground flex items-center"
              style={{ width: "800px" }}
            >
              Ever since I was a child, I&apos;ve been captivated by computers.
              Rather than just using websites and software, I wanted to know how
              they worked. This curiosity led me to explore the world of
              programming. It was by learning the basics of coding that I
              realized that computing could be more than just a hobby, it could
              be my profession.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src={Avatar}
              alt="Avatar"
              width={96}
              height={96}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <TechStack />
      <h2 className="text-white flex justify-center py-8">
        Oh, you&apos;re at the end of the home page, you can go to the other
        pages to see my websites and contact me at the top of the page, in the
        navigation.
      </h2>
      <Footer />
    </div>
  );
}
