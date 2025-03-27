import Citation from '@/components/Citation';

import Compteur from '@/components/Compteur';
import Toggler from '@/components/Toggler';
import Decompteur from '@/components/Decompteur';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Accueil | Web avancé',
    description: 'Page d\'accueil du site présentant divers composant créé avec React.',
};

export default function Accueil() {
    return <>
        <Citation auteur="Jonathan Wilkie">
            Faites vos devoirs
        </Citation>
        <Citation auteur="Bruce Wayne">
            I'm Batman!
        </Citation>

        <Compteur />
        <Compteur debut={42} />

        <Toggler />

        <Decompteur depart={10} />
        <Decompteur />
    </>
}
