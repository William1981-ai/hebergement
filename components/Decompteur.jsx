"use client"

import { useEffect, useState } from 'react';

import styles from './Decompteur.module.css';

export default function Decompteur({depart}) {
    const [nombre, setNombre] = useState(depart || 60);

    useEffect(() => {
        // Exécuté lorsque le composant est ajouté dans la page
        const identifiant = setInterval(() => {
            setNombre((vraiNombre) => {
                if(vraiNombre <= 0) {
                    clearInterval(identifiant);
                    return 0;
                }

                return vraiNombre - 1;
            });
        }, 1000);

        return () => {
            // Exécuté lorsque le composant est retiré de la page
            clearInterval(identifiant);
        }
    }, []);

    return <div className={styles.decompteur}>
        {nombre}
    </div>
}