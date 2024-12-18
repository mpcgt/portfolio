"use client";

import Navbar from "../navbar";
import Image from "next/image";
import Saguenay from "../../assets/img/projects/saguenay.png";
import Levetica from "../../assets/img/projects/levetica.png";
import ToDo from "../../assets/img/projects/to-do.png";
import Password from "../../assets/img/projects/password.png";
import NoImage from "../../assets/img/projects/black.png";
import Link from "next/link";
import { motion, useMotionTemplate } from "framer-motion";
import { Earth, Github } from "lucide-react";
import Banner from "../banner";
import Footer from "../footer";

export default function Projects() {
  const color = { r: 255, g: 255, b: 255, a: 1 };
  const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  const border = useMotionTemplate`1px solid ${rgbaColor}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${rgbaColor}`;

  return (
    <>
      <Banner />
      <Navbar />
      <div className="bg-black text-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={Saguenay}
              alt="Saguenay"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Saguenay&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    React
                  </span>
                </h2>
                <p className="text-gray-400">
                  Saguenay is a privacy-focused, ad-free social network that
                  prioritizes user well-being by avoiding algorithms and
                  tracking, offering an authentic experience while ensuring
                  safety, transparency, and ethical data practices.{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://saguenay.vercel.app"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    Visit the website
                  </Link>
                  <Earth />
                </motion.button>

                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/saguenay"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={Levetica}
              alt="Levetica"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Levetica&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    React
                  </span>
                </h2>
                <p className="text-gray-400">
                  Programming language-specific tools are essential resources
                  for developers, enabling them to work efficiently in a
                  language-specific development environment by offering features
                  such as syntax highlighting, automatic code completion, syntax
                  checking and debugging.{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://levetica.vercel.app"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    Visit the website
                  </Link>
                  <Earth />
                </motion.button>

                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/levetica"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={ToDo}
              alt="To-do"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  To-Do&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
                    Vue
                  </span>
                </h2>
                <p className="text-gray-400">
                  A privacy-friendly to-do list created with Vue.js 📋{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://todo-mpcgt.vercel.app"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    Visit the website
                  </Link>
                  <Earth />
                </motion.button>

                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/to-do"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={Password}
              alt="Password Generator"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Password Generator&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
                    JavaScript
                  </span>
                </h2>
                <p className="text-gray-400">
                  Protect your online accounts with strong, unique passwords 🔒{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://mpcgt.github.io/password-generator/"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    Visit the website
                  </Link>
                  <Earth />
                </motion.button>

                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/password-generator"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={NoImage}
              alt="No Image"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Calculator&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    React Native
                  </span>
                </h2>
                <p className="text-gray-400">
                  Your indispensable mathematical assistant ➗{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/calculator"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={NoImage}
              alt="No Image"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Tic Tac Toe&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
                    Vue
                  </span>
                </h2>
                <p className="text-gray-400">
                  A simple game, but addictive ❌⭕{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-white transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://jeu-de-morpion.vercel.app"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    Visit the website
                  </Link>
                  <Earth />
                </motion.button>

                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/tic-tac-toe"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={NoImage}
              alt="No Image"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  What time is it?&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    TypeScript
                  </span>
                </h2>
                <p className="text-gray-400">
                  Displays live time in terminal 🕑{" "}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center space-x-5">
                <motion.button
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
                >
                  <Link
                    href="https://github.com/mpcgt/what-the-time"
                    target="_blank"
                    className="text-white hover:text-white"
                  >
                    GitHub
                  </Link>
                  <Github />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
