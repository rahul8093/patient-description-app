import { IconCalendarWeek } from "@tabler/icons-react";
import { useState, useMemo } from "react";
import clsx from "clsx"; // Optional: If you want to use classnames library for cleaner class management.

export default function DateFilter() {
  // Memoize dates array to prevent unnecessary re-renders.
  const dates = useMemo(
    () => [
      "11th Jan, 2025",
      "3rd Jan, 2025",
      "28th Dec, 2024",
      "1st Oct, 2024",
    ],
    []
  );

  const [selectedDate, setSelectedDate] = useState(dates[0]);

  return (
    <div className="flex items-center justify-between mx-6 px-2">
      <div className="flex items-center justify-center space-x-4">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={clsx(
              "flex items-center justify-center px-3 py-2 text-sm font-medium rounded-t-md transition duration-200 border border-borderGray border-b-0 rounded-br-0 rounded-bl-0",
              selectedDate === date
                ? "bg-[#F4FAFF] text-[#3A5BC7] gap-1"
                : "text-[#1C2024] gap-1"
            )}
          >
            <span
              className={clsx(
                "w-3 h-3 rounded-full flex items-center justify-center mr-1",
                selectedDate === date && "bg-[#3A5bc7]"
              )}
            >
              {selectedDate === date && (
                <span className="w-1 h-1 bg-white rounded-full" />
              )}
            </span>
            <span>{date}</span>
          </button>
        ))}
      </div>
      <IconCalendarWeek size={18} className="text-black" />
    </div>
  );
}
