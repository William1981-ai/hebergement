"use client"

import { useState } from 'react';

import styles from './Compteur.module.css'

export default function Compteur({debut}) {
    const [nombre, setNombre] = useState(debut || 0)

    const incrementer = () => {
        setNombre(nombre + 1)
    }

    return <div className={styles.compteur}>
        <span>{nombre}</span>
        <button onClick={incrementer}>
            Incrémenter
        </button>
    </div>
}