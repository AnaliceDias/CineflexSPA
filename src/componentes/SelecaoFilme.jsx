import react from "react";
import { useState , useEffect} from 'react';
import styled from "styled-components";
import { Link , useParams} from "react-router-dom";
import axios from 'axios';

export default function SelecaoFilme(){
    const [filmes, setFilmes] = useState(null);
       
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);
               
        })
        requisicao.catch(() => console.log("Erro na requisição"));
    }, []);

    if( filmes === null){
        return(
            <h1>Carregando...</h1>
        );
    }
    
    return(
        <Container>
            <h1>Selecione o filme</h1>
            <ContainerDosFilmes>
        
                {filmes.map( filme => <Link to={"/SelecaoSessao/"+filme.id} ><div><img src= {filme.posterURL}/></div></Link>)}  
                
            </ContainerDosFilmes>
        </Container>
        
        
    );
    
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-filmes: center;

    width: 100%;

    margin-top: 25px;

    h1{
        margin-bottom: 30px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;

        color: #293845;    

    }

`

const ContainerDosFilmes = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    min-width: 320px;
    max-width: 82%;
    margin: auto;

    div {
        display: flex;
        justify-content: center;
        align-filmes: center;
        
        width: 145px;
        height: 209px;

        margin-bottom: 11px;

        background: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        img {
            width: 129px;
            height: 193px;
            margin: auto;
        }

`