"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hardhat } from "viem/chains";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick, useTargetNetwork } from "~~/hooks/scaffold-eth";
import { motion } from "framer-motion";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <motion.li 
            key={href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={href}
              passHref
              className={`${
                isActive 
                  ? "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30" 
                  : "hover:bg-black/30"
              } text-gray-300 hover:text-white py-2 px-4 text-sm rounded-xl transition-all duration-300 flex items-center gap-2`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </motion.li>
        );
      })}
    </>
  );
};

// Custom styled button wrapper
const StyledButton = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative group"
  >
    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
    <div className="relative bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800">
      {children}
    </div>
  </motion.div>
);

/**
 * Site header
 */
export const Header = () => {
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const burgerMenuRef = useRef<HTMLDetailsElement>(null);
  useOutsideClick(burgerMenuRef, () => {
    burgerMenuRef?.current?.removeAttribute("open");
  });

  return (
    <div className="sticky lg:static top-0 navbar bg-black/40 backdrop-blur-xl min-h-0 shrink-0 justify-between z-20 border-b border-gray-800 px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <details className="dropdown" ref={burgerMenuRef}>
          <summary className="ml-1 btn btn-ghost lg:hidden hover:bg-black/30">
            <Bars3Icon className="h-1/2 text-gray-300" />
          </summary>
          <ul
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-black/90 backdrop-blur-xl rounded-xl border border-gray-800 w-52"
            onClick={() => {
              burgerMenuRef?.current?.removeAttribute("open");
            }}
          >
            <HeaderMenuLinks />
          </ul>
        </details>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex flex-col">
            <span className="font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              User Info
            </span>
            <span className="text-xs text-gray-400">Web3 Profile System</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end grow mr-4">
        <div className="flex items-center gap-4">
          
              <RainbowKitCustomConnectButton />
            
          {isLocalNetwork && (
            <StyledButton>
              <div className="px-4 py-2">
                <FaucetButton />
              </div>
            </StyledButton>
          )}
        </div>
      </div>
    </div>
  );
};
