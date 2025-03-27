import Image from 'next/image';

import images from '@/data/gallerie-pokemon.json'

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Gallerie | Web avancé',
    description: 'Présentation des boucles et de l\'affichage des images avec React et Next.js.',
};

export default function Gallerie() {
    return <>
        <h2>Gallerie</h2>

        {images.map((image, index) => 
            <Image 
                priority={index === 0}
                key={image.src} 
                src={image.src} 
                alt={image.alt}
                width={image.width}
                height={image.height} />
        )}
    </>
}