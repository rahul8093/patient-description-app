'use client';

import Image from "next/image";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (section: string) => void;
}

export default function Sidebar({ isOpen, onClose, onSelect }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#3A5bc7] shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <button onClick={onClose}>
          <Image src="/icons/menu.svg" alt="menu" width={18} height={18} priority />
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <button onClick={() => onSelect('patients')} className="text-left w-full hover:text-blue-500">
              Patient
            </button>
          </li>
          <li>
            <button onClick={() => onSelect('prescriptions')} className="text-left w-full hover:text-blue-500">
              Prescriptions
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
