"use client";

import Navbar from "../navbar";
import Image from "next/image";
import Lumify from "../../assets/img/projects/school/lumify.png";
import Plantax from "../../assets/img/projects/school/plantax.png";
import Restaurant from "../../assets/img/projects/school/kome-waza.jpg";
import NoImage from "../../assets/img/projects/no-image.png";
import Link from "next/link";
import { motion, useMotionTemplate } from "framer-motion";
import { Earth, Github } from "lucide-react";
import Banner from "../banner";
import Footer from "../footer";

export default function School() {
  const color = { r: 255, g: 255, b: 255, a: 1 };
  const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  const border = useMotionTemplate`1px solid ${rgbaColor}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${rgbaColor}`;

  return (
    <>
      <Banner />
      <Navbar />
      <div className="bg-black text-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <p className="text-white-500 sm:text-xl dark:text-white-400 text-center mb-8">
          ⚠️ Many of the exercises I&apos;ve done in PHP, React, Symfony, etc.,
          are private. Below, you&apos;ll find only those projects whose
          repositories are public.{" "}
        </p>
        <div className="max-w-[85rem] md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mx-auto">
          <div>
            <Image
              className="rounded-xl"
              src={Lumify}
              alt="Lumify"
              width={96}
              height={96}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Lumify&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-500">
                    Symfony
                  </span>
                </h2>
                <p className="text-gray-400">
                  Lumify is a group project aimed at creating an alternative to
                  Twitter (X). The project is developed using the Symfony
                  framework and aims to provide a modern social platform with
                  features similar to those of Twitter.{" "}
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
                    href="https://github.com/Lumify-Social/lumify"
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
              src={Plantax}
              alt="Plantax"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Plantax&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                    HTML
                  </span>
                </h2>
                <p className="text-gray-400">
                  Plantax is your one-stop online store for all your plant
                  needs. 🌱🪴 (Exercise 2024/05/22){" "}
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
                    href="https://github.com/mpcgt/plantax"
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
                  Pixel Art&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    CSS
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Pixel Art. 🖼️🎨 (Exercise 2024/10/24){" "}
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
                    href="https://mpcgt.github.io/school-pixel-art/"
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
                    href="https://github.com/mpcgt/school-pixel-art"
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
                  Périgord tourist office&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    CSS
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Périgord tourist office. 🗼📸 (Exercise
                  2024/10/24){" "}
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
                    href="https://mpcgt.github.io/school-perigord/"
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
                    href="https://github.com/mpcgt/school-perigord"
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
                  Festival Music&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                    HTML
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Music Festival website 🎶🎸 (Exercise
                  2024/10/25){" "}
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
                    href="https://mpcgt.github.io/school-festival/"
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
                    href="https://github.com/mpcgt/school-festival"
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
                  Chocolate House&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    CSS
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Chocolate House website 🍫😋 (Exercise
                  2024/11/04){" "}
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
                    href="https://mpcgt.github.io/school-chocolate-house/"
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
                    href="https://github.com/mpcgt/school-chocolate-house"
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
                  Bento Grid&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                    SCSS
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Bento Grid website 🎨🖌️ (Exercise 2024/11/06){" "}
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
                    href="https://mpcgt.github.io/school-bento-grid/"
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
                    href="https://github.com/mpcgt/school-bento-grid"
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
              src={Restaurant}
              alt="Kome Waza"
              width={900}
              height={900}
            />{" "}
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-white">
                  Japanese restaurant&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                    HTML
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Japanese restaurant 🍣🗾 (Exercise 2024/11/08){" "}
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
                    href="https://github.com/mpcgt/school-kome-waza"
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
                  Weather&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
                    JavaScript
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the Weather website ☀️🌡️ (Exercise 2024/11/27){" "}
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
                    href="https://github.com/mpcgt/school-weather"
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
                  To-do&nbsp;
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
                    JavaScript
                  </span>
                </h2>
                <p className="text-gray-400">
                  Exercise on the To-Do List website 📋✏️ (Exercise 2024/12/04){" "}
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
                    href="https://github.com/mpcgt/school-to-do"
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
