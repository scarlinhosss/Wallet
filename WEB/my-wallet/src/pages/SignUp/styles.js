import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 100vh;
    padding: 0 20px;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        margin-top: 30px;
        font-weight: 700;
        font-size: 15px;
        text-decoration: none;
    }
    
    h1 {
        color:white;
        font-family: "Saira Stencil One", "serif", "regular";
        font-weight: 400;
        font-style: normal;
        font-size: 32px;
        line-height: 50.37px;
    }

    form {
        width: 100%;
    }
`