import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucesso(){
    return(
        <Container>
            Uhuuu! Sucesso!

            
            <Link to="/"><buttom>Voltar pra Home</buttom></Link>
        </Container>
    );
}

const Container = styled.div`

`