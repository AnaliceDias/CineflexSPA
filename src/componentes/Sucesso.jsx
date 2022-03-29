import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sucesso(){
    const pedido = useLocation();
    return(
        <Container>
            <h1>{`Pedido feito\ncom sucesso!`}</h1>

            <Informacoes>
                <Informacao>
                    <h2>Filme e sessão</h2>
                    <p>nome do filme</p>
                    <p>Sessão</p>
                </Informacao>

                <Informacao>
                    <h2>Ingressos</h2>
                    <p>numero do assento</p>
                    <p>numero do assento</p>
                </Informacao>

                <Informacao>
                    <h2>Comprador</h2>
                    <p>Nome: {"fulano"}</p>
                    <p>CPF: {"123.456.789.10"}</p>
                </Informacao>

            </Informacoes>

            
            <Link to="/"><Botao>Voltar pra Home</Botao></Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    h1{
        width: 45%;

        margin-bottom: 30px;
        margin-top: 30px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;

        color: #247A6B;;    

    }

`

const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 225px;
    height: 42px;

    margin: auto;
    margin-bottom: 15px;
    margin-top: 60px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    border-style: none;
    background: #E8833A;
    border-radius: 3px;
`

const Informacoes = styled.div`
    width: 85%;

`
const Informacao = styled.div`
    margin-bottom: 15px;    

    font-family: 'Roboto';
    font-style: normal;

    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;

    h2 {
        margin-bottom: 5px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
    }
`