import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.production.min";
import styled from "styled-components";

export default function Footer(props){
    //const [legenda , setLegenda] = useState(null);
    //const {idFilme} = useParams();


    return (
        <>
        <Container>
            <Banner>
                <img src={props.img}/>
            </Banner>
            <Informacoes>
                <span>{props.titulo}</span>
                <span></span>
            </Informacoes>
            
        </Container>
        
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    position: fixed;
    bottom:0;
    z-index: 1;

    width: 100%;
    height: 117px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;
    
`
const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 89px;

    margin-right: 14px;
    margin-left: 10px;
    
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img {
        width: 48px;
        height: 72px;
    }
`

const Informacoes = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    
    overflow: hidden;
    white-space: nowrap;

    span {
        max-width: 100%;
        max-height: 35px;
        
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;

        overflow: hidden;
        text-overflow: ellipsis;

        color: #293845;   

    }
`