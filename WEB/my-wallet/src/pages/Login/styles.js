import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    padding: 20px;

    @media only screen and (min-width: 768px) and (max-width: 1023px){
        max-width: 70%;
        padding: 20px;
        justify-content: space-between;
        margin: 0 auto;
    }
    
    @media only screen and (min-width: 1024px){
        justify-content: center;
        align-items: center;
        h1 {
            color: red;
        }
    }
    
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
`;