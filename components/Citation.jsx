import styles from './Citation.module.css';

export default function Citation({children, auteur}) {
    return <>
        <div className={styles.citation}>
            {children}
        </div>
        <div className={styles.auteur}>
            {auteur}
        </div>
    </>
}