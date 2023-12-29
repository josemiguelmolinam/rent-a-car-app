import './globals.css';

import { Footer, NavBar } from '../components';

export const metadata = {
  title: 'Prestige Drive Rentals',
  description: 'Drive your dreams',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
