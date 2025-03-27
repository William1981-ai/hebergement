import FiltreListe from '@/components/FiltreListe';
import FormLogin from '@/components/FormLogin';

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: 'Formulaire | Web avancé',
    description: 'Présentation des formulaires ainsi que des actions cliente et serveur avec React et Next.js.',
};

export default function Formulaire() {
    return <>
        <h2>Formulaires</h2>

        <FormLogin />

        <h2>Input contrôlé</h2>

        <FiltreListe />
    </>
}