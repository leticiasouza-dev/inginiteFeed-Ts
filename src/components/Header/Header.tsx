import styles from './Header.module.css';

import logoIgnite from '../../assets/logo-ignite.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={logoIgnite} alt="logo ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}
