'use client';

import { useState } from 'react';
import PatientModal from './patient/PatientModal';

interface MainContentProps {
  section: string;
}

const patients = [
  { id: 1, name: 'Chinmay Sule', age: 38, diagnosis: 'Hypertension' },
];

export default function MainContent({ section }: MainContentProps) {
  const [selectedPatient, setSelectedPatient] = useState<null | (typeof patients)[0]>(null);

  if (section === 'patients') {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4 text-[#3A5BC7]">Patient List</h2>
        <div className="grid gap-2">
          {patients.map((patient) => (
            <div
              key={patient.id}
              className="p-4 bg-gray-100 text-[#107D98] rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
              onClick={() => setSelectedPatient(patient)}
            >
              {patient.name}
            </div>
          ))}
        </div>

        {selectedPatient && (
          <PatientModal
            patient={selectedPatient}
            onClose={() => setSelectedPatient(null)}
          />
        )}
      </div>
    );
  }

  if (section === 'prescriptions') {
    return <div className="text-gray-500">[Prescriptions View Placeholder]</div>;
  }

  return <div className="text-gray-400">Welcome to the Dashboard</div>;
}
