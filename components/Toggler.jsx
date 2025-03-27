"use client"

import { useState } from 'react'

import styles from './Toggler.module.css'

export default function Toggler() {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible)
    }

    return <div>
        <div className={styles.toggler} onClick={toggle}>
            Cliquer moi!  
            <span>
                {visible ? '⮝' : '⮟'}
            </span>
        </div>

        {/*visible ?
            <div className={styles.contenu}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate incidunt ad consequatur perspiciatis voluptas temporibus culpa exercitationem reprehenderit, porro voluptatem quos dicta excepturi voluptatum pariatur totam est quisquam tempore.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, praesentium doloribus. Aperiam veniam dignissimos impedit. Natus, nesciunt minus recusandae beatae aut quaerat. Consequatur dolorum corrupti modi, est ratione officia earum.
            </div>
        :
            null
        */}

        {/*visible &&
            <div className={styles.contenu}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate incidunt ad consequatur perspiciatis voluptas temporibus culpa exercitationem reprehenderit, porro voluptatem quos dicta excepturi voluptatum pariatur totam est quisquam tempore.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, praesentium doloribus. Aperiam veniam dignissimos impedit. Natus, nesciunt minus recusandae beatae aut quaerat. Consequatur dolorum corrupti modi, est ratione officia earum.
            </div>
        */}

        <div className={styles.contenu + (visible ? '' : ' ' + styles.cache)}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate incidunt ad consequatur perspiciatis voluptas temporibus culpa exercitationem reprehenderit, porro voluptatem quos dicta excepturi voluptatum pariatur totam est quisquam tempore.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, praesentium doloribus. Aperiam veniam dignissimos impedit. Natus, nesciunt minus recusandae beatae aut quaerat. Consequatur dolorum corrupti modi, est ratione officia earum.
        </div>
        
    </div>
}