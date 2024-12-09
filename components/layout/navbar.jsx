"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Squash as Hamburger } from 'hamburger-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isDarkMode, setDarkMode] = React.useState(false);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    const prefersDark = localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  return (
    <div className="flex flex-row-reverse sm:flex-row items-center justify-between p-6 border-b border-gray-200 shadow-xl dark:bg-gray-800 bg-gray-100">
      <div>
        <a href="/">
          <img
            src={isDarkMode ? "logo-dark.png" : "logo.png"}
            alt="logo"
            width="100"
            height="100"
            className="object-contain"
          />
        </a>
      </div>
      <div className="hidden md:block">
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Me
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center ms-16 hidden md:block">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}
          aria-label="Toggle dark mode"
        />
      </div>
      <div className="block md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger asChild>
        </SheetTrigger>
        <SheetContent side="left">
        <SheetTitle/>
          <div className="grid gap-4 py-6">
            <Link href="/" passHref>
              <Button className="w-full">Home</Button>
            </Link>
            <Link href="/projects" passHref>
              <Button className="w-full">Projects</Button>
            </Link>
            <Link href="/about" passHref>
              <Button className="w-full">About Me</Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="w-full">Contact</Button>
            </Link>
            <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={20}
            aria-label="Toggle dark mode"
          />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}