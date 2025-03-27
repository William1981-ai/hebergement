"use server" // nous fait savoir que ce fichier doit être exécuté sur le serveur

import { validateLogin } from "@/validations/login"
import { redirect } from "next/navigation";

export async function loginServeur(formData) {
    let [erreur, newFormState] = validateLogin(formData);

    if(erreur) {
        return [erreur, newFormState];
    }

    if(formData.get('courriel') !== 'jwilki@lacitec.on.ca') {
        erreur = true
        newFormState.courriel.erreur = 'Aucun compte avec ce courriel.';
        return [erreur, newFormState];
    }

    if(formData.get('motdepasse') !== 'test1234') {
        erreur = true;
        newFormState.motdepasse.erreur = 'Mauvais mot de passe.';
        return [erreur, newFormState];
    }

    redirect('/');
    // return [erreur, newFormState]
}