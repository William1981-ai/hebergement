"use client"

import { useState } from 'react';

import styles from './FiltreListe.module.css';

export default function FiltreListe() {
    const fruits = [
        'Pomme',
        'Poire',
        'Banane',
        'Orange',
        'Ananas',
        'Koki',
        'Kiwi',
        'Fraise',
        'Raisin',
        'Melon d\'eau',
        'Cerise',
        'Tomate'
    ];

    const filtreFruits = (fruit) => fruit
        .toLowerCase()
        .includes(filtre.toLowerCase());

    const [filtre, setFiltre] = useState('');
    const handleFiltre = (event) => setFiltre(event.currentTarget.value);

    return <>
        <input type="text" value={filtre} onChange={handleFiltre} className={styles.input} />

        <ul>
            {fruits.filter(filtreFruits).map((fruit) => 
                <li key={fruit}>
                    {fruit}
                </li>
            )}
        </ul>
    </>
}