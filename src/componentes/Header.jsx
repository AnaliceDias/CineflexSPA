import styled from "styled-components";

export default function Header(){
    return (
        <>
        <Container>
        <p>CINEFLEX</p>
        </Container>
        </>
    );
}

const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    position: sticky;
    top: 0;
    z-index: 1;

    width: 375px;
    height: 67px;

    background: #C3CFD9;

    p {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;

        color: #E8833A;
    }

`;