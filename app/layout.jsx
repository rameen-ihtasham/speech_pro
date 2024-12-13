import Nav from '@/components/Nav';
import '../styles/global.css';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Speech Pro',
  description:
    'A web based application built for improving your spoken English skills',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

//const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
