import { useState } from "react";
import { IconExclamationCircle, IconX } from "@tabler/icons-react";

export default function MedicineAlert() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAlert = () => setIsOpen(!isOpen);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
    //   onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main alert button */}
      <div
        className="flex items-center whitespace-nowrap bg-red-600 text-white text-xs px-3 py-1.5 rounded-md space-x-2 cursor-pointer"
        onClick={toggleAlert}
      >
        <IconExclamationCircle size={18} />
        <span>Medicine Alert</span>
      </div>

      {/* Tooltip Popup */}
      {isOpen && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 flex flex-col items-center z-10">
          <div
            className="bg-white text-black text-xs px-4 py-4 border border-gray-300 rounded-md shadow-md w-72"
            onMouseEnter={() => setIsOpen(true)}
            // onMouseLeave={() => setIsOpen(false)}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-red-600 font-semibold text-md">Medicine Alert</h2>
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
                aria-label="Close Alert"
              >
                <IconX size={13} />
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              The patient is allergic to Penicillin-based medications, including Amoxicillin.
              Prescribing this medication may cause a severe allergic reaction.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-3 py-2 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100"
                onClick={toggleAlert}
                aria-label="Override Warning"
              >
                Override Warning
              </button>
              <button
                className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                aria-label="View Alternatives"
              >
                View Alternatives
              </button>
            </div>
          </div>
          <div className="w-2 h-2 bg-white rotate-45 -mt-1"></div>
        </div>
      )}
    </div>
  );
}
