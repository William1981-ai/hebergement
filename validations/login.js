export function validateLogin(formData) {
    const courriel = formData.get('courriel');
    const motdepasse = formData.get('motdepasse');

    let newFormState = {
        courriel: { erreur: null, valeur: '' },
        motdepasse: { erreur: null, valeur: '' }
    }

    let erreur = false;
    if (!courriel) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
    }
    else if (!courriel.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.'
    }

    if (!motdepasse) {
        erreur = true;
        newFormState.motdepasse.erreur = 'Veuillez entrer votre mot de passe.'
    }

    return [erreur, newFormState];
}