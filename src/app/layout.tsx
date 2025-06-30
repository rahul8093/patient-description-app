import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Patient App',
};

export default function RootLayout({ }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout />
      </body>
    </html>
  );
}
