import './css/style.css';

import localFont from 'next/font/local';

import Header from '@/components/ui/header';
import Script from 'next/script';

const bandung = localFont({ src: './BandungRegular.otf', variable: '--font-bandung' });

export const metadata = {
  title: 'MatTerra - TI-as-a-Service',
  description: 'Desbloqueie o potencial tecnológico de sua empresa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4}`}/>
    <Script strategy="lazyOnload">
      {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4}', {
                    page_path: window.location.pathname,
                    });
                `}
    </Script>
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
