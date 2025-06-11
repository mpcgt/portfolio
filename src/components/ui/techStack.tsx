"use client";

import Image from "next/image";
import React from "../../assets/img/logos/react.png";
import TypeScript from "../../assets/img/logos/ts.png";
import TailwindCSS from "../../assets/img/logos/tailwindcss.png";
import HTML from "../../assets/img/logos/html.png";
import CSS from "../../assets/img/logos/css.png";
import JavaScript from "../../assets/img/logos/js.png";
import Symfony from "../../assets/img/logos/symfony.png";
import Linux from "../../assets/img/logos/linux.png";
import Win11 from "../../assets/img/logos/win11.png";

export default function TechStack() {
  return (
    <section className="w-full bg-black text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white-900 dark:text-white">
            My experience
          </h2>
          <p className="text-white-500 sm:text-xl dark:text-white-400">
            I&apos;ve acquired a solid grasp of React, TypeScript and
            TailwindCSS to create high-performance web applications, while
            exploring Next.js for its advanced features. I also deploy my
            projects on Vercel for optimized environment management.{" "}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={React} alt="React" width={96} height={96} />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">React</h3>
            <p className="text-white-500 dark:text-white-400">
              Most of the time, I code with React to create dynamic, modular
              user interfaces, and I&apos;m starting to deepen my skills by
              learning the Next.js framework, to exploit its advanced features
              like server-side rendering (SSR) and static site generation (SSG).
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={TypeScript} alt="TypeScript" width={96} height={96} />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              TypeScript
            </h3>
            <p className="text-white-500 dark:text-white-400">
              I use TypeScript to enhance code quality and maintainability,
              taking advantage of static verification and clear interfaces.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image
                src={TailwindCSS}
                alt="TailwindCSS"
                width={96}
                height={96}
              />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              TailwindCSS
            </h3>
            <p className="text-white-500 dark:text-white-400">
              Using TailwindCSS, I was able to build modern, responsive
              interfaces using utility classes, which considerably reduced
              development time.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-4 ml-16 mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={HTML} alt="HTML" width={96} height={96} />
              <Image src={CSS} alt="CSS" width={96} height={96} />
              <Image
                src={JavaScript}
                alt="JavaScript"
                width={96}
                height={96}
              />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              HTML ~ CSS ~ JavaScript
            </h3>
            <p className="text-white-500 dark:text-white-400">
              When I started programming at the age of 13, I took my first steps
              with HTML, CSS and JavaScript, laying the foundations for my web
              development skills.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={Symfony} alt="Symfony" width={96} height={96} />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Symfony</h3>
            <p className="text-white-500 dark:text-white-400">
              I know a good thing about this PHP framework: I code my projects
              with MariaDB for database management, Twig for creating dynamic
              web pages and Composer for installing packages.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-4 ml-6 mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Image src={Win11} alt="Windows 11" width={96} height={96} />{" "}
              <Image src={Linux} alt="Linux" width={96} height={96} />{" "}
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Windows 11 ~ Linux
            </h3>
            <p className="text-white-500 dark:text-white-400">
              I use Windows 11 as my primary development environment on a daily
              basis, integrating Linux tools, while having hands-on experience
              with several Linux distributions, including Manjaro, Ubuntu,
              ZorinOS and ChromeOS, enabling me to adapt easily to various
              environments and take advantage of the benefits of each system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
