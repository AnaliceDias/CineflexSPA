import styled from "styled-components";

export default function SelecaoFilme(){
    return (
        <Container>
        <h1>Selecione o filme</h1>
        <ContainerDosFilmes>
            <ContainerLado>
                <div>
                    <img/>
                    caixa com banner do filme dentro
                </div>
                <div>caixa com banner do filme dentro</div>
                <div>caixa com banner do filme dentro</div>
                <div>caixa com banner do filme dentro</div>
                <div>caixa com banner do filme dentro</div>
            </ContainerLado>
            <ContainerLado><div>caixa com banner do filme dentro</div></ContainerLado>
            
        </ContainerDosFilmes>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 320px;

    margin-top: 25px;

    h1{
        margin-bottom: 25px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        color: #293845;

    }


`

const ContainerDosFilmes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;

`

const ContainerLado = styled.div`
    width: 145px;

    div {
        position: relative;
        width: 145px;
        height: 209px;

        margin-bottom: 11px;

        background: yellow; /*#FFFFFF*/;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        
    }
`

