import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function SelecaoAssento(){
    return (
        <>
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            <Assentos>
                <Assento></Assento>
            </Assentos>
        </Container>
        <Link to="/Sucesso"><button>Reservat assento(s)</button></Link>
        <Footer />
        
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;

    width: 85%;
    padding-bottom: 117px;
    margin-top: 25px;
    background: yellow;

    h1{
        margin-bottom: 22px;

        font-family: 'Roboto';
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;

        color: #293845;   
    }
`

const Assentos = styled.div`
    width: 100% /*371px*/;

    background: pink;
`

const Assento = styled.div`
    width: 26px;
    height: 26px;

    background: #C3CFD9;
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;
`