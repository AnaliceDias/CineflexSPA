import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import ReservarAssentos from './reservarAssentos';

export default function SelecaoAssento(){
    const [sessao , setSessao] = useState(null);
    const { idSessao } = useParams();
    let idsAssentosSelecionados = [];
    let corDoAssento = "#C3CFD9";
    let pedido = {ids: idsAssentosSelecionados, name: "", cpf: ""}

    function selecaoDeAssentos(id, controle){
        let situacaoDoAssento = idsAssentosSelecionados.includes(id);
        let arrayDeApoio = [];
        if(!situacaoDoAssento && controle){
            idsAssentosSelecionados.push(id);
            corDoAssento = "#8DD7CF";
            setSessao(sessao);
        }else if(controle) {
            for(let i =0; i< idsAssentosSelecionados.length; i++){
                if(idsAssentosSelecionados[i] !== id){
                    arrayDeApoio.push(idsAssentosSelecionados[i]);
                }
            }
            idsAssentosSelecionados=[...arrayDeApoio];
            corDoAssento = "#C3CFD9";
            setSessao(sessao);
        }
        pedido.ids = idsAssentosSelecionados;
        console.log(pedido);
    }

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        requisicao.then(resposta => setSessao(resposta.data));

    }, [])

    if(sessao === null){
        return(
            <p>Carregando...</p>
        )
    }
    
    return (
        <>
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            <Assentos>
            {sessao.seats.map((assento, index) => {
                return(
                    <Assento 
                    id={assento.id} key={index} 
                    disponibilidade = {assento.isAvailable} 
                    style = {(assento.isAvailable) ? {background: corDoAssento} : {background: "#FBE192"}} 
                    onClick = {() => selecaoDeAssentos(assento.id , assento.isAvailable)}>
                        <p>{assento.name}</p>
                    </Assento>
                )
            })}
                
            </Assentos>
            <Legenda>

                <Selecionado>
                    <Assento style = {{background: "#45BDB0"}}/>
                    <p>Selecionado</p>
                </Selecionado>

                <Disponivel>
                    <Assento style = {{
                        background: "#C3CFD9"}} />
                    <p>Disponível</p>
                </Disponivel>

                <Indisponivel>
                    <Assento style = {{background: "#FBE192"}}/>
                    <p>Indisponível</p>
                </Indisponivel>

            </Legenda>
            <Formulario>
                <Entrada>
                    <p>Nome do comprador:</p>
                    <input 
                        placeholder='Digite seu nome...' 
                        onChange={(event) => {
                            pedido.name = event.target.value;
                        }}>
                    </input>
                </Entrada>
                <Entrada>
                    <p>CPF do comprador:</p>
                    <input 
                        placeholder='Digite seu CPF...' 
                        onChange={(event) => {
                            pedido.cpf = event.target.value;
                        }}>
                    </input>
                </Entrada>
            </Formulario>
            <Link to="/Sucesso" ><Botao onClick={()=> {ReservarAssentos(pedido)}}><p>Reservar assento(s)</p></Botao></Link>
        </Container>
        
        <Footer  
        controle = {true} 
        img = {sessao.movie.posterURL} 
        titulo={sessao.movie.title} 
        dia={sessao.day.weekday} horario={sessao.name}/>
        
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    
    width: 90%;
    padding-bottom: 117px;
    margin-top: 25px;

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

const Botao = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 225px;
    height: 42px;

    margin: auto;
    margin-bottom: 15px;

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

const Assentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
    width: 100% /*371px*/;

`

const Assento = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

    width: 26px;
    height: 26px;
    margin-right: 7px;
    margin-bottom: 7px;
    /*background: ${cor => cor.disponibilidade ?  "#C3CFD9" : "#FBE192"}*/
    
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #000000;

    }
`

const Legenda = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-top: 25px;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }

`
const Selecionado = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 50px;

`

const Disponivel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Indisponivel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 50px;
`

const Formulario = styled.div`
margin-top: 41px;

`

const Entrada = styled.div`
    margin-bottom: 7px;

    p{
        margin-bottom: 2px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }

    input {
        width: 327px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 3px;
    }
`