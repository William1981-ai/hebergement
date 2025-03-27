import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Roboto, Poppins } from 'next/font/google';

import styles from './layout.module.css'

import './globals.css';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

const poppins = Poppins({
    weight: '700',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins'
});

export const metadata = {
    title: "Web avancé",
    description: "Site web présentant différentes techniques avec React et Next.js.",
};

export default function RootLayout({ children }) {
    return <html lang="en" className={roboto.variable + ' ' + poppins.variable}>
        <body className={styles.body}>
            <Header />

            <main className={styles.main}>
                {children}
            </main>
            
            <Footer />
        </body>
    </html>
}
