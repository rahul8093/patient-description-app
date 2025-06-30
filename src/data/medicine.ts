// src/data/medicines.ts

export interface Medicine {
  id: number;
  name: string;
  dosageForm: string;
  dosage: string;
  duration: string;
  description: string;
  frequency: string;
}

export const medicines: Medicine[] = [
  {
    id: 1,
    name: 'Digoxin',
    dosageForm: 'Tablet',
    dosage: '1-1 tab/day',
    duration: '7 days',
    description: 'Patient shows signs of fatigue and dyspnea',
    frequency: 'BD',
  },
  {
    id: 2,
    name: 'Furosemide',
    dosageForm: 'Intravenous',
    dosage: '5 ml/day',
    duration: '4 days',
    description: 'Confirmed post HbA1c test, further monitoring required',
    frequency: 'OD',
  },
  {
    id: 3,
    name: 'Atorvastatin',
    dosageForm: 'Tablet',
    dosage: '1 tab/night',
    duration: '30 days',
    description: 'To manage cholesterol levels',
    frequency: 'HS',
  },
  {
    id: 4,
    name: 'Paracetamol',
    dosageForm: 'Tablet',
    dosage: '500 mg',
    duration: '5 days',
    description: 'Used for fever and mild pain relief',
    frequency: 'TDS',
  },
   {
    id: 5,
    name: 'Amoxicillin',
    dosageForm: 'Capsule',
    dosage: '500 mg',
    duration: '7 days',
    description: 'Antibiotic used for bacterial infections such as respiratory and urinary tract infections.',
    frequency: 'TDS',
  },
];
