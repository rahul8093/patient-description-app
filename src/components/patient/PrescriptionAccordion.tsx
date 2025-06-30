
import { useMedicineContext } from "@/context/MedicineContext";
import { IconArrowUpRight } from "@tabler/icons-react";
import PrescriptionAddTable from "./PrescriptionAddTable";
import MedicineAlert from "./MedicineAlert";


export default function PrescriptionAccordion() {
const { selectedMedicines } = useMedicineContext();
  return (
    <>
      <table className="w-full border-collapse">
        <thead className="">
          <tr className="bg-white text-left text-xs text-textSecondary">
            <th className="p-2 border border-borderGray border-t-0 border-l-0 w-[30%]">
              Medication Name
            </th>
            <th className="p-2 border  border-borderGray border-t-0 w-[11.33%]">
              Frequency
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[11.33%]">
              Dose
            </th>
            <th className="p-2 border border-borderGray  border-t-0 w-[11.33%]">
              Duration
            </th>
            <th className="p-2 border border-borderGray  border-t-0 border-r-0 w-[30%]">
              Remarks
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedMedicines.map((medicine) => (
            <tr
              key={medicine.id}
              className={`text-sm text-[#1C2024] ${
                medicine.name === "Amoxicillin"
                  ? "hover:bg-[#FFF7F7]"
                  : "hover:bg-[#F7F9FF]"
              } font-normal cursor-pointer`}
            >
              <td className="py-2 px-4 border border-l-0 border-borderGray">
                <div className="flex items-center justify-between space-x-3 w-full ">
                  <div className="flex items-center space-x-3 w-full">
                    <label className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#aebff9]"
                      />
                    </label>
                    <div>
                      <div className="text-sm text-[#1C2024]">{medicine.name}</div>
                      <div className="text-[10px] text-gray-500">
                        {medicine.dosageForm}
                      </div>
                    </div>
                  </div>

                  <span className="text-black text-xs cursor-pointer ml-auto">
                    {medicine.name === "Amoxicillin" ? (
                    <MedicineAlert/>
                    ) : (
                      <IconArrowUpRight size={16} />
                    )}
                  </span>
                </div>
              </td>
              <td className="py-2 px-3 border border-borderGray">
                <span className="bg-[#F9F9FB] border border-[#B9BBC6] py-1 px-1 rounded-md text-xs">
                  {medicine.frequency}
                </span>
              </td>
              <td className="h-[48px] py-2 px-3 border border-borderGray">
                {medicine.dosage}
              </td>
              <td className="py-2 px-3 border border-borderGray">
                {medicine.duration}
              </td>
              <td className="py-2 px-3 border border-r-0 border-borderGray cursor-pointer">
                {medicine.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <PrescriptionAddTable />
    </>
  );
}