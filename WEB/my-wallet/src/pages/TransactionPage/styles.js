import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    height: 100vh;
    padding: 25px 24px;
    
    h1 {
        color: white;
        font-size: 26px;
        margin: 0;
    };

    form {
        padding-top: 24px;
    }

    svg {
        height: 25px;
        width: 25px;
        cursor: pointer;
        transform: rotate(45deg);
        color: white;
    }
`

export const Header = styled.div `
    display: flex;
    flex-direction: row;
    justify-content:space-between;
`