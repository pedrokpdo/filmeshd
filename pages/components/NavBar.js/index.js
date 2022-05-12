import styles from './NavBar.module.css'                                                                                                                                                                                                                                                                                                                                                            

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <h1>MegaFilmesHd</h1>
            </div>
            <div className={styles.menuIten}>
                <ul>
                    <li>Home</li>
                    <li>Lista de Filmes</li>
                    <li>Peça Filmes</li>
                    <li>Contato</li>
                </ul>
            </div>
        </div>
    )
}