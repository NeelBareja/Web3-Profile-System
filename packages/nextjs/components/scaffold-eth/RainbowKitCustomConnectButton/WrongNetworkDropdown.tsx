import { useRef, useState } from "react";
import { NetworkOptions } from "./NetworkOptions";
import { useDisconnect } from "wagmi";
import { ArrowLeftOnRectangleIcon, ChevronDownIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { getTargetNetworks } from "~~/utils/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

const allowedNetworks = getTargetNetworks();

export const WrongNetworkDropdown = () => {
  const { disconnect } = useDisconnect();
  const [selectingNetwork, setSelectingNetwork] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  

  useOutsideClick(dropdownRef, () => {
    setSelectingNetwork(false);
  });

  return (
    <div className="dropdown dropdown-end mr-2 leading-3" ref={dropdownRef}>
      <motion.label 
        tabIndex={0} 
        className="btn btn-ghost flex items-center gap-2 px-2 py-2 bg-red-500/20 backdrop-blur-xl rounded-xl border border-red-700 shadow-lg text-red-300 transition-all duration-300 hover:bg-red-500/30 cursor-pointer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium">Wrong network</span>
        <ChevronDownIcon className="h-4 w-4" />
      </motion.label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[100] p-2 mt-2 shadow-lg bg-black/90 backdrop-blur-xl rounded-xl border border-gray-800 gap-1 w-40"
      >
        {selectingNetwork ? (
          <NetworkOptions />
        ) : (
          <>
            {allowedNetworks.length > 0 && (
              <motion.li
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="transition-all duration-300"
              >
                <button
                  className="rounded-xl! flex items-center gap-3 py-3 px-3 w-full text-left text-gray-300 hover:bg-black/30 hover:text-white"
                  type="button"
                  onClick={() => {
                    setSelectingNetwork(true);
                  }}
                >
                  <ArrowsRightLeftIcon className="h-4 w-4" />
                  <span className="text-sm">Switch Network</span>
                </button>
              </motion.li>
            )}
            <motion.li
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="transition-all duration-300"
            >
              <button
                className="rounded-xl! flex items-center gap-3 py-3 px-3 w-full text-left text-error hover:bg-black/30"
                type="button"
                onClick={() => disconnect()}
              >
                <ArrowLeftOnRectangleIcon className="h-4 w-4" />
                <span className="text-sm">Disconnect</span>
              </button>
            </motion.li>
          </>
        )}
      </ul>
    </div>
  );
};
