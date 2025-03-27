"use client"

import { useActionState } from 'react';
// import { useRouter } from 'next/navigation';
import { loginServeur } from '@/actions/login';
import { validateLogin } from '@/validations/login';

import styles from './FormLogin.module.css';

export default function FormLogin() {
    // const router = useRouter();

    /**
     * @param {FormData} formData 
     */
    const login = async (previousFormState, formData) => {
        let [erreur, newFormState] = validateLogin(formData);

        if(!erreur) {
            [erreur, newFormState] = await loginServeur(formData);
        }

        if(erreur) {
            newFormState.courriel.valeur = formData.get('courriel');
            newFormState.motdepasse.valeur = formData.get('motdepasse');
        }
        else {
            // Préférer une solution serveur
            // router.replace('/');
        }

        return newFormState;
    }

    const [formState, formAction] = useActionState(login, {
        courriel: { erreur: null, valeur: '' },
        motdepasse: { erreur: null, valeur: '' }
    });

    return <form action={formAction} className={styles.form} noValidate>
        <label>
            Courriel:
            <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
            <div className={styles.erreur}>
                {formState.courriel.erreur}
            </div>
        </label>

        <label>
            Mot de passe: 
            <input type="password" name="motdepasse" defaultValue={formState.motdepasse.valeur} />
            <div className={styles.erreur}>
                {formState.motdepasse.erreur}
            </div>
        </label>

        <button type="submit">Connexion</button>
    </form>
}