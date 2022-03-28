import { useState , useEffect} from 'react';
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Footer from './Footer';


export default function SelecaoSessao(){
    const [sessoes , setSessoes] = useState(null);
    const {idFilme} = useParams();
    


    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        requisicao.then(resposta => {
            setSessoes(resposta.data);
        })
        requisicao.catch(() => console.log("erro na requisição"));
    }, [])

    if(sessoes === null){
        return(
            <p>carregando...</p>
        )
    }

    return (
        <>
        <Container>
            <h1>Selecione o horário</h1>
            {sessoes.days.map((dia , index) => (
            <Sessoes key={index}>
                <h1>{dia.weekday + " - " + dia.date}</h1>
                <Horarios>
                    <Link to="/SelecaoAssento">
                        {dia.showtimes.map((horario , index) => (<Horario key={index}><p>{horario.name}</p></Horario>))}
                    </Link>
                </Horarios>
            </Sessoes>))}            
        </Container>
        <Footer img = {sessoes.posterURL} titulo={sessoes.title}/>
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

const Sessoes = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    margin: auto;
    margin-bottom: 18px;

    h1{
        
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: start;
        letter-spacing: 0.02em;
        text-align: start;
    }


`

const Horarios = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: start;

`

const Horario = styled.div`
    display: inline-block;

    position: relative;
    
    width: 83px;
    height: 43px;

    margin-right: 8px;
    margin-bottom: 5px;

    background: #E8833A;
    border-radius: 3px;

    p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 11px;
        
        text-align: center;
        text-justify: distribute;
        font-size: 18px;
        line-height: 21px;
        
        letter-spacing: 0.02em;

        color: #FFFFFF;
    }
    
`