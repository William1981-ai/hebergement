import inventaire from '@/data/inventaire.json';
import Link from 'next/link';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Magasin | Web avancé',
    description: 'Page listant les produits d\'un magasin fictif pour démontrer la génération dynamique de page avec Next.js.'
}

export default function Magasin() {
    return <>
        <h2>Magasin</h2>

        <nav>
            <ul>
                {inventaire.map((item) => 
                    <li key={item.slug}>
                        <Link href={`/magasin/${item.slug}`}>
                            {item.nom}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    </>
}