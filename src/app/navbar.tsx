"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../assets/img/me.png";
import GitHub from "../assets/img/logos/github.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-black">
      <div className="w-[90%] max-w-6xl bg-transparent bg-zinc-900 text-white backdrop-blur-sm rounded-full px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={Avatar}
            alt="Avatar"
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="font-semibold text-lg ml-2">Max</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-2">
            <NavigationMenuItem>
              <Link
                href="/"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-white focus:bg-gray-200/80 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/projects"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-white focus:bg-gray-200/80 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                Projects
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/school"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-white focus:bg-gray-200/80 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                School
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-white focus:bg-gray-200/80 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-700 hover:text-white focus:bg-gray-200/80 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}
              >
                Contact
              </Link>
            </NavigationMenuItem>
            <Link href={"https://github.com/mpcgt"} target="_blank">
            <Image
            src={GitHub}
            alt="GitHub"
            width={36}
          />
          </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
