import Link from 'next/link';
import Image from 'next/image';

import logo from '@/public/logo.png';

import styles from './Header.module.css';

export default function Header() {
    return <header className={styles.header}>
        <Image src={logo} alt="Logo de React.js" />
        <h1>Titre du site web</h1>
        <nav>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/gallerie">Gallerie</Link>
                </li>
                <li>
                    <Link href="/form">Formulaires</Link>
                </li>
                <li>
                    <Link href="/apropos">À propos</Link>
                </li>
            </ul>
        </nav>
    </header>
}