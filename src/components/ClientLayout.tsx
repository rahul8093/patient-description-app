'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { MedicineProvider } from '@/context/MedicineContext';

export default function ClientLayout() {
  const [selectedSection, setSelectedSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 🔥 NEW state for sidebar toggle

  return (
    <MedicineProvider><div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelect={(section) => {
          setSelectedSection(section);
          setIsSidebarOpen(false); // optional: close after selection
        }}
      />

      {/* Right side layout */}
      <div className="flex flex-col flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="bg-white flex-1 p-6">
          <MainContent section={selectedSection} />
        </main>
      </div>
    </div></MedicineProvider>
    
  );
}
