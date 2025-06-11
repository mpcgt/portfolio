"use client";

import Image from "next/image";
import React from "../../assets/img/logos/react.png";
import Certification from "../../assets/img/projects/certification.png";
import Cisco from "../../assets/img/projects/cisco.png";
import Link from "next/link";

export default function Certifications() {
  return (
    <section className="w-full bg-black text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white-900 dark:text-white">
            My certifications
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-1 lg:grid-cols-1 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image
                src={Certification}
                alt="Certification"
                width={96}
                height={96}
              />{" "}
            </div>

            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Web and Mobile Web Developer
            </h3>
            <p className="text-white-500 dark:text-white-400">
              I obtained a level 5 professional qualification as a Web and
              Mobile Web Developer, which gave me a solid grounding in
              full-stack web development. This certification attests to my
              technical skills as well as my ability to design and build web and
              mobile sites.{" "}
              <Link href={"/school"} className="underline">
                On this page
              </Link>
              , you&apos;ll find some practical exercises I completed during my
              training.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={Cisco} alt="Cisco" width={96} height={96} />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Introduction to cybersecurity
            </h3>
            <h3 className="mb-2 text-lg font-bold italic dark:text-white">Cisco</h3>
            <p className="text-white-500 dark:text-white-400">
              I took Cisco&apos;s “Introduction to Cybersecurity” course, which
              gave me the essential basics of cybersecurity. I learned how to
              identify the main digital threats, understand the risks associated
              with IT systems and take part in managing and responding to
              security incidents. This training made me aware of the challenges
              of data protection and gave me my first structured experience in
              the field of cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
