import './css/style.css';

import localFont from 'next/font/local';

import Header from '@/components/ui/header';

const bandung = localFont({src: './BandungRegular.otf', variable: "--font-bandung"})

export const metadata = {
  title: 'MatTerra - Tech Lead-as-a-Service',
  description: 'Desbloqueie o potencial tecnológico de sua empresa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body
      className={`${bandung.className} font-bandung antialiased bg-gray-900 text-gray-200 tracking-tight`}>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header/>
      {children}
    </div>
    </body>
    </html>
  );
}
