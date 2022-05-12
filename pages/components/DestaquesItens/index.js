import styles from './DestaquesItens.module.css'

export const DestaquesItens = ({titulo, genero, stars, descriçao, img, assistir}) => {
    return (
        <div className={styles.container}>
            <h1>{titulo}</h1>
            <h2>{genero}</h2>
            <p>Nota: {stars}</p>
            <img width={300} height={300} src={img}/>
            <p>{descriçao}</p>
        </div>
    )
}