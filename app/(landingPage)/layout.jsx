import Nav from '@/components/Nav';
import '../../styles/global.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Speech Pro',
  desc: 'AI based web app to improve spoken English',
};

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
