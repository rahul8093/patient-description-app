'use client';

import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="w-full p-4 bg-white text-black flex justify-between items-center shadow">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick}>
          <Image src="/icons/menu.svg" alt="menu" width={18} height={18} priority />
        </button>
        <Image src="/icons/logoName.svg" alt="companyLogo" width={120} height={40} priority />
      </div>

      {/* Right: Avatar/Icon */}
      <div className="flex items-center gap-4">
        <Image src="/icons/logo.svg" alt="logo" width={24} height={24} className="cursor-pointer" />
      </div>
    </div>
  );
}
