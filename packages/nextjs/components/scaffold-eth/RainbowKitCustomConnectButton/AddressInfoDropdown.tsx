import { useRef, useState } from "react";
import { getAddress } from "viem";
import { Address } from "viem";
import { useDisconnect } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import { BlockieAvatar, isENS } from "~~/components/scaffold-eth";
import { useCopyToClipboard, useOutsideClick } from "~~/hooks/scaffold-eth";
import { motion } from "framer-motion";

type AddressInfoDropdownProps = {
  address: Address;
  
  displayName: string;
  ensAvatar?: string;
};

export const AddressInfoDropdown = ({
  address,
  ensAvatar,
  displayName,
}: AddressInfoDropdownProps) => {
  const { disconnect } = useDisconnect();
  const checkSumAddress = getAddress(address);

  const { copyToClipboard: copyAddressToClipboard, isCopiedToClipboard: isAddressCopiedToClipboard } =
    useCopyToClipboard();
  const [setSelectingNetwork] = useState(false);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const closeDropdown = () => {
    setSelectingNetwork(false);
    dropdownRef.current?.removeAttribute("open");
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <>
      <details ref={dropdownRef} className="dropdown dropdown-end leading-3">
        <summary className="btn btn-ghost flex items-center gap-2 px-2 py-2 bg-black/40 backdrop-blur-xl rounded-xl border border-gray-800 shadow-lg transition-all duration-300 hover:bg-black/60 cursor-pointer">
          <BlockieAvatar address={checkSumAddress} size={30} ensImage={ensAvatar} />
          <span className="text-sm font-medium text-gray-300">
            {isENS(displayName) ? displayName : checkSumAddress?.slice(0, 6) + "..." + checkSumAddress?.slice(-4)}
          </span>
          <ChevronDownIcon className="h-4 w-4 text-gray-300" />
        </summary>
        <ul className="dropdown-content z-[100] p-2 mt-2 shadow-lg bg-black/90 backdrop-blur-xl rounded-xl border border-gray-800 gap-1 w-48">
          <motion.li
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="transition-all duration-300"
          >
            <div
              className="h-8 rounded-xl! flex items-center gap-3 py-3 px-3 cursor-pointer text-gray-300 hover:bg-black/30 hover:text-white"
              onClick={() => copyAddressToClipboard(checkSumAddress)}
            >
              {isAddressCopiedToClipboard ? (
                <>
                  <CheckCircleIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="whitespace-nowrap text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <DocumentDuplicateIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="whitespace-nowrap text-sm">Copy address</span>
                </>
              )}
            </div>
          </motion.li>
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
              <ArrowLeftOnRectangleIcon className="h-4 w-4" /> <span className="text-sm">Disconnect</span>
            </button>
          </motion.li>
        </ul>
      </details>
    </>
  );
};
