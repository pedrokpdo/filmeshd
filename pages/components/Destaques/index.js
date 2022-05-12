import { DestaquesItens } from "../DestaquesItens"
import { filmes } from "../../../mock"
import styles from './Destaques.module.css'
export const Destaques = () => {
    return (
        <div className={styles.container}>
            {filmes.map((item) => (
                  <DestaquesItens
                  titulo={item.titulo}
                  genero={item.genero}
                  stars={item.stars}
                  descriçao={item.descriçao}
                  img={item.img}
                  assistir={item.assistir}
              />
            ))}
          
        </div>
    )
}