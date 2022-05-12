import styles from './DestaquesItens.module.css'

export const DestaquesItens = ({ titulo, genero, stars, descriçao, img, assistir }) => {
    return (
        <div className={styles.container}>
            <div style={{ marginLeft: '100px' }}>
                <h1>{titulo}</h1>
                <h2>{genero}</h2>
                <p>Nota: {stars}</p>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img width={300} height={300} src={img} />
                    <h1><a href={assistir}>Assistir</a></h1>
                </div>
                <p>{descriçao}</p>
            </div>
        </div>
    )
}