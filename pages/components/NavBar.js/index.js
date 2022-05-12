import * as C from './styles'

export const NavBar = () => {
    return (
        <C.Container>
            <C.Logo>
                <h1>MegaFilmesHd</h1>
            </C.Logo>
            <C.MenuIten>
                <ul>
                    <li>Home</li>
                    <li>Lista de Filmes</li>
                    <li>Peça Filmes</li>
                    <li>Contato</li>
                </ul>
            </C.MenuIten>
        </C.Container>
    )
}