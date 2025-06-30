'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Medicine } from '@/data/medicine';

interface MedicineContextType {
  selectedMedicines: Medicine[];
  addMedicine: (medicine: Medicine) => void;
  removeMedicine: (id: number) => void;
  addMedicineByName: (name: string) => void;
}

const MedicineContext = createContext<MedicineContextType | undefined>(undefined);

export const MedicineProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMedicines, setSelectedMedicines] = useState<Medicine[]>([]);
console.log(selectedMedicines,'context')
  const addMedicine = (medicine: Medicine) => {
    setSelectedMedicines((prev) =>
      prev.some((m) => m.id === medicine.id) ? prev : [...prev, medicine]
    );
  };

   // Function to add a medicine by name (id is auto-generated)
  const addMedicineByName = (name: string) => {
    const newMedicine: Medicine = {
      id: Date.now(), // Generate a unique ID based on timestamp (or use a counter)
      name: name,
      dosageForm: 'Intravenous',
      dosage: '1-1 tab/day',
      duration: '5 days',
      description: 'Confirmed post HbA1c test, further monitoring required',
      frequency: 'OD'
    };
        setSelectedMedicines((prev) =>
      prev.some((m) => m.id === newMedicine.id) ? prev : [...prev, newMedicine]
    );
  };


  const removeMedicine = (id: number) => {
    setSelectedMedicines((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MedicineContext.Provider value={{ selectedMedicines, addMedicine, removeMedicine,addMedicineByName }}>
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicineContext = () => {
  const context = useContext(MedicineContext);
  if (!context) {
    throw new Error('useMedicineContext must be used within a MedicineProvider');
  }
  return context;
};
