import { useMedicineContext } from "@/context/MedicineContext";
import { useState } from "react";


export default function PrescriptionAddTable(){
    const {addMedicineByName} = useMedicineContext()
    const [medicineName, setMedicineName] = useState("");
    const [showInput, setShowInput] = useState(false);

    const handleCancel = () => {
    setMedicineName("");
    setShowInput(false);
  };

    const handleSave = () => {
    if (medicineName.trim() === "") return;
    addMedicineByName(medicineName);
    setMedicineName("");
    setShowInput(false);
  };

  return (
    <div className={`w-full flex flex-col items-start justify-start pb-2 ${showInput ? 'pt-0' :'pt-2' }`}>
      {showInput && (
        <div className="flex items-center gap-3 w-full border-b pr-3 mb-2">
          <input
            type="text"
            placeholder="Type vital name and place enter..."
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addMedicineByName(medicineName);
                }
            }}
            className="flex-1 px-3 py-2  text-sm outline-none text-textSecondary focus:outline-none focus:ring-2 focus:ring-[#8DA4EF] cursor-text"
          />
          <button
            onClick={handleCancel}
            className="px-3 py-1 text-red-600 text-sm cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={handleSave}
            className="px-3 py-1 text-blue-600 text-sm cursor-pointer"
          >
            Save
          </button>
        </div>
      )}
      <button
        onClick={() => setShowInput(true)}
        className="px-3 py-1 text-[#3A5BC7] rounded text-sm cursor-pointer"
      >
        + New Row
      </button>
    </div>
  );
};

