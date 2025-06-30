'use client';

import { FC } from 'react';
import { IconSearch, IconX } from '@tabler/icons-react';
import { Medicine, medicines } from '@/data/medicine';
import { useMedicineContext } from '@/context/MedicineContext';


interface Props {
    isOpen: boolean;
    onClose: () => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const MedicineSearchModal: FC<Props> = ({ isOpen, onClose, searchQuery, setSearchQuery }) => {
        const { addMedicine,addMedicineByName } = useMedicineContext(); // Get the addMedicine function from context

    if (!isOpen) return null;


    // Filter medicines based on search query
    const filtered: Medicine[] = searchQuery
        ? medicines.filter((medicine: Medicine) =>
            medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    // Handle selecting a medicine and adding it to the global context
    const handleMedicineSelect = (medicine: Medicine) => {
        addMedicine(medicine); // Add the selected medicine to the global context
        onClose(); 
        console.log('Updated Medicines:', medicine); 
    };
    const handleCustomMedicineSelect = (name: string) => {
        addMedicineByName(name); // Add the selected name to the global context
        onClose(); 
        console.log('Updated Medicines:', name); 
    };
    return (
        <div className="fixed inset-0 z-50 flex items-start pt-4 justify-center bg-gray-100">
            <div className="bg-white rounded-lg w-full max-w-4xl shadow-lg ml-8">
                {/* Search Bar */}
                <div className="flex items-center gap-2 border-b border-borderGray p-4 text-[#1C2024]">
                    <IconSearch size={20} />
                    <input
                        type="text"
                        placeholder="Type medicine name"
                        className="w-full p-2 rounded-md focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={onClose} className="text-gray-500">
                        <IconX size={20} />
                    </button>
                </div>

                {/* Suggested Action */}
                {searchQuery && (
                    <div className="w-full px-6 py-4">
                        <h6 className="text-xs text-gray-500 mb-2">Suggested Action</h6>
                        <button
                            className="relative flex items-center gap-2 w-full h-10 bg-[#F7F9FF] text-[#3A5BC7] px-6 py-2 rounded cursor-pointer"
                            onClick={() => {
                                handleCustomMedicineSelect(searchQuery)
                                console.log('Add to Prescription:', searchQuery);
                                onClose();
                            }}
                        >
                            <IconSearch size={18} />
                            <span>Add &quot;{searchQuery}&quot; to Prescription</span>
                            <span className="absolute right-4 text-xs text-gray-400">Custom</span>
                        </button>
                    </div>
                )}

                {/* Filtered Medicine Results */}
                {filtered.length > 0 && (
                    <div className="px-6 pb-6 space-y-3">
                        {filtered.map((medicine) => (
                            <button
                                key={medicine.id}
                                onClick={() => handleMedicineSelect(medicine)} // Use the new handler
                                className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-blue-50 transition"
                            >
                                <h3 className="text-base font-semibold text-[#1C2024]">{medicine.name}</h3>
                                <p className="text-sm text-gray-600">
                                    {medicine.dosageForm} • {medicine.dosage} • {medicine.frequency} •{' '}
                                    {medicine.duration}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">{medicine.description}</p>
                            </button>
                        ))}
                    </div>
                )}

                {/* If no medicines match the query */}
                {filtered.length === 0 && searchQuery && (
                    <div className="px-6 py-4 text-center text-gray-500">
                        No medicines found for &quot;{searchQuery}&quot;
                    </div>
                )}
            </div>
        </div>
    );
};

export default MedicineSearchModal;
