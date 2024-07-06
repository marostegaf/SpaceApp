import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Imagem from "./Imagem"
import Populares from "./Polulares"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], aoSelecionarFoto, aoAlternarFavorito }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem 
                            aoZoomSolicitado={ aoSelecionarFoto }
                            aoAlternarFavorito={ aoAlternarFavorito }
                            key={foto.id} 
                            foto={foto} />)
                        }
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria