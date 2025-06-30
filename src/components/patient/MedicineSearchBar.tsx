'use client';

import { FC, useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import MedicineSearchModal from './MedicineSearchModal';

const MedicineSearchBar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="w-1/2 max-w-xl my-4">
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 shadow-sm cursor-pointer"
        >
          <IconSearch size={18} className="text-gray-500 mr-2" />
          <span className="text-sm text-gray-400 flex-1">Search Medicines Eg. Antihypertensives</span>
          <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded font-mono hidden sm:block">
            ⌘ /
          </span>
        </div>
      </div>

      <MedicineSearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
};

export default MedicineSearchBar;
