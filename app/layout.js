import { Inter } from 'next/font/google';
import './globals.css';

// alias
import Navbar from './navbar/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Tutorial',
  description: 'Build awesome stuff with Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme="light" className='bg-base-200'>
      <body className={`${inter.className} `}>
        <Navbar />
        <main className='px-8 py-10 md:py-16 max-w-6xl mx-auto'>
          <div className='breadcrumbs text-sm mb-6 text-base-content/70'>
            <ul>
              <li><a className='text-primary hover:text-primary-focus'>Home</a></li>
              <li className='text-base-content'>Pavde</li>
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}