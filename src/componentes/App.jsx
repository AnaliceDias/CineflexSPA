import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SelecaoFilme from "./SelecaoFilme";
import SelecaoSessao from "./SelecaoSessao";
import SelecaoAssento from "./SelecaoAssento";
import Sucesso from "./Sucesso";

export default function App(){
    
    return(
        
        <Container>
            <Header />
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<SelecaoFilme />} />
                <Route path="/SelecaoSessao/:idFilme" element={<SelecaoSessao />} />
                <Route path="/SelecaoAssento" element={<SelecaoAssento /> }/>
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