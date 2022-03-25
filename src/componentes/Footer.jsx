import styled from "styled-components";

export default function Footer(){
    return (
        <>
        <Container>
            <p>Aqui fica o footer</p>
        </Container>
        
        </>
    );
}

const Container = styled.div`
position: fixed;
bottom:0;
z-index: 1;

width: 375px;
height: 117px;

background: #DFE6ED;
border: 1px solid #9EADBA;
`