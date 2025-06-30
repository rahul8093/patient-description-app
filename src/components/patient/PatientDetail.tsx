import { FC } from 'react';
import { IconPhone,IconGenderMale,IconCake,IconVaccine,IconMan,IconBrandPeanut,IconSmoking,IconGlassFullFilled } from '@tabler/icons-react';
import { Patient } from '@/types';

interface PatientDetailsProps {
  patient: Patient;
  
}
const PatientDetails: FC<PatientDetailsProps> = ({patient}) => {
  return (
    <main className="w-full bg-white border border-borderGray rounded-md flex flex-col">
      {/* Top Row: Patient Info */}
      <div className="flex w-full h-3/4 border-b border-borderGray">
        <div className="flex-1 px-4 flex items-center gap-4">
          <h1 className="flex items-center justify-center text-[#107D98] font-semibold text-lg bg-[#F2FAFB] h-[48px] w-[48px] rounded-md">
            CS
          </h1>
          <div className="flex flex-col gap-1">
            <h1 className="text-black font-semibold text-xl">{patient.name}</h1>
            <h5 className="text-textSecondary text-xs">100087-000015-2</h5>
          </div>
        </div>
        <div className="flex items-center px-4 gap-6 text-[#1C2024] basis-[33.33%]">
          <div className="flex items-center gap-1 border-x border-borderGray px-4 h-full w-1/2">
            <IconPhone />
            <span className="text-mono whitespace-nowrap text-sm">+91-9096396014</span>
          </div>
          <div className="flex gap-6">
            <span className="text-mono flex items-center gap-1">
              <IconGenderMale /> Male
            </span>
            <span className="text-mono flex items-center gap-1">
              <IconCake /> {patient.age}
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-row flex-wrap gap-2 px-3 py-2">
        {[
          { text: 'Sulfa Drug Allergy', bg: '#F7F9FF', color: '#3A5BC7', icon: <IconVaccine /> },
          { text: 'Statin Muscle Pain', bg: '#F7F9FF', color: '#3A5BC7', icon: <IconMan /> },
          { text: 'Peanut Allergy', bg: '#FFF7ED', color: '#CC4E00', icon: <IconBrandPeanut /> },
          { text: 'Penicillin Allergy', bg: '#FFF7ED', color: '#CC4E00', icon: <IconVaccine /> },
          { text: 'Smoker', bg: '#FFF7F7', color: '#CE2C31', icon: <IconSmoking /> },
          { text: 'Alcohol Use', bg: '#FFF7F7', color: '#CE2C31', icon: <IconGlassFullFilled/> },
        ].map((tag, index) => (
          <div
            key={index}
            className="inline-flex items-center w-fit rounded-3xl border-0 px-3 py-2"
            style={{ backgroundColor: tag.bg, color: tag.color }}
          >
            <div className="flex items-center gap-2 text-[14px] font-medium">
              {tag.icon}
              {tag.text}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PatientDetails;
