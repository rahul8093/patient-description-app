'use client';

import PatientDetails from "./PatientDetail";
import MedicineSearchBar from "./MedicineSearchBar";
import { MedicineProvider } from "@/context/MedicineContext";
import AccordionSection from "./AccordionSection";
import DateFilter from "./DateFilter";
import { Patient } from "@/types";
import { IconArrowBack,IconChevronUp,IconChevronDown,IconCaretDown,IconDots } from "@tabler/icons-react";



interface PatientModalProps {
  patient: Patient;
  onClose: () => void;
}

export default function PatientModal({ patient, onClose }: PatientModalProps) {
  return (
    <MedicineProvider>
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex items-center justify-center z-50 px-4">
      <div className="bg-[#F7F9FF] h-auto overflow-y-auto p-6 relative rounded-lg shadow-lg">

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="cursor-pointer flex items-center gap-1 text-sm px-3 py-2 rounded-md border transition text-black hover:bg-gray-200 border-borderGray"
              aria-label="Close"
            >
              <IconArrowBack/>
              Back
            </button>
            <div className="h-9 w-[1px] bg-gray-200"></div>

            <button
              className="cursor-pointer flex items-center gap-1 text-sm px-3 py-2 
           rounded-md border transition text-black hover:bg-gray-200 border-borderGray">
              <IconChevronUp/>
            </button>
            <button className="cursor-pointer flex items-center gap-1 
          text-sm px-3 py-2 rounded-md border transition text-black hover:bg-gray-200 border-borderGray">
              <IconChevronDown/>
            </button>
          </div>


          <div className="flex items-center gap-3">
            <button
              className="cursor-pointer flex items-center gap-1 text-sm px-3 py-2 rounded-md border transition text-white bg-blue-600 border-0 hover:bg-[#3557c7]">
              <span className="font-medium">Actions</span>
              <IconCaretDown/>
            </button><div className="h-9 w-[1px] bg-gray-200"></div>
            <button className="cursor-pointer flex items-center gap-1 text-sm px-3 py-2 rounded-md border transition text-black hover:bg-gray-200 border-borderGray">
              <IconDots/>
              </button></div>


        </div>

        {/* patientDetails */}
        <PatientDetails patient={patient}/>

        {/* medicine searchbar */}
        <MedicineSearchBar/>

        {/* Date Tabs */}
        <DateFilter/>

        {/* accordian */}
        <AccordionSection prescribedMedicine={[]} />

      </div>
    </div>
    </MedicineProvider>
    
  );
}
