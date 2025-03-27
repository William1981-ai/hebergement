import Image from "next/image";

import inventaire from '@/data/inventaire.json';
import { notFound } from "next/navigation";
import Link from "next/link";

/**
 * @returns {import("next").Metadata}
 */
export async function generateMetadata({params}) {
    const slugs = await params;
    const slug = slugs.item;
    const item = inventaire.find((item) => item.slug === slug);
    
    return {
        title: `${item.nom} | Web avancé`,
        description: item.description
    }
}

export default async function Item({params}) {
    const slugs = await params;
    const slug = slugs.item;
    const item = inventaire.find((item) => item.slug === slug);

    if(!item) {
        notFound();
    }

    return <>
        <h2>{item.nom}</h2>
        <p>{item.description}</p>
        <Image src={item.image} alt={item.nom} width={32} height={32} />
        <Link href="/magasin">Retour</Link>
    </>
}