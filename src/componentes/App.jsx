import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import SelecaoAssento from "./SelecaoAssento";
import SelecaoFilme from "./SelecaoFilme";
import SelecaoSessao from "./SelecaoSessao";
import Sucesso from "./Sucesso";


export default function App(){
    
    return(
        
        <Container>
            <Header />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelecaoFilme />} />
                <Route path="/SelecaoSessao/:idFilme" element={<SelecaoSessao />} />
                <Route path="/SelecaoAssento/:idSessao" element={<SelecaoAssento /> }/>
                <Route path="/Sucesso" element={<Sucesso /> }/>

            </Routes>
            </BrowserRouter>
        </Container>
        
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
`